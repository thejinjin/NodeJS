module.exports = function(app) {

    app.get('/noSession', function(req, res) {
        res.render('noSession', {
            title: '没有通过拦截器验证，无法进入LIST'
        });
    });
}