const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0f55083b62e35a56c4b81acf898c4a85',
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
