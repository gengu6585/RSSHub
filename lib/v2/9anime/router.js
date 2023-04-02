module.exports = function (router) {
    router.get('/top_rated_anime', require('./main'));
    router.get('/trending', require('./main'));
    router.get('/newest', require('./main'));
    router.get('/tags/:tagid/:sort/:pagelimit?', require('./main'));
};
