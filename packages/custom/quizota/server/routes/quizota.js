
module.exports = (quizota, app, users, system) => {

    console.log(" ------------- init route --------");

    app.get('/',function(req, res, next) {
        res.send('Anyone can access this');
    })
}