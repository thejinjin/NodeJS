var exception_list = ["/", "/index", "/noSession"];

function validationSession(req, res, next) {
    var url = req.originalUrl;
    var flg = true;
    for (var i in exception_list) {
        (url == exception_list[i]) && (flg = false);
    }

    if (flg && req.session.user == undefined) {
        res.redirect('/noSession');
    }
    next();
}
//路由器
module.exports = function(app) {
    app.use(function(req, res, next) {
        validationSession(req, res, next);
    });
    require("./index")(app);
    require("./list")(app);
    require("./noSession")(app);
}