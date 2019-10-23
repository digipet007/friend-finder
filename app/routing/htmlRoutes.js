//path package comes with node- makes delivering pages with express easier
var path = require("path");

//buidling routes to tell router what html page to deliver based on the url
//routes are inside module.exports function so these paths can be included in the server.js file
module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //for homepage- did not include a direct route; instead used app.use to make this the default directory
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}