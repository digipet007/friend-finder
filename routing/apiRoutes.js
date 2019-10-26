//require data from friends.js
var friends = require('../data/friends');
 
module.exports = function (app) {
    //route for viewing all friends
    app.get('/api/friends', function(req, res) {
        //parameter is variable created above- return all friends
        res.json(friends);
    });

    //post new user data to database
    app.post('/api/friends', function (req, res) {

        console.log("post route" + req.body);

        friends.push(req.body);

    })
        
}