import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import { LinK } from 'react-router-dom';

import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { Switch } from 'react-router-dom';

import MovieCard from '../movie-card/MovieCard';

const MovieList = (props) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {
                            params,
                        });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {
                            params,
                        });
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItem(response.results);
        };
        getList();
    }, []);

    return (
        <div className='movie-list'>
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                {item.map((item, i) => (
                    <SwiperSlide key={i}>
                        <MovieCard item={item} category={props.category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default MovieList;
