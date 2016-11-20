module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index', {
            title: 'Express -- Session'
        });
    });

    app.post('/index', function(req, res) {
        req.session.user = req.body.sessionVal;
        var str = {
            "Flg": true,
            "Message": "存入SESSION成功"
        };
        res.json(str);
        res.end();
    });
}