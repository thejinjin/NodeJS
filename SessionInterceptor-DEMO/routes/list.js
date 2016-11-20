module.exports = function(app) {

    app.get('/list', function(req, res) {
        res.render('list', {
            title: '顺利通过了拦截器进入了LIST'
        });
    });
}