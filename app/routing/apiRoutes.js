//require data from friends.js
var friends = require('../data/friends');
 
module.exports = function (app) {
    //route for viewing all friends
    app.get('/api/friends', function(req, res) {
        //parameter is variable created above- return all friends
        res.json(friends);
    });

    //route for viewing best match
    app.get('/api/friends', function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        //take the result of the user's input POST from request.body, and parse it; assign that data to userScores
        var userData = req.body;
        var userScores = userData.scores;

        //used to calculate difference between user's scores and other users in database
        var totalDifference = 0;

        for (var i = 0; i = friends.length; i++) {

            console.log(friends[i].name);
            totalDifference = 0;

            //loop through all scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {
                //find total difference between user scores and friends scores
                //.abs returns absolute value
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                //find lowest difference between scores. If total difference is less than friendDifference
                if (totalDifference <= bestMatch.friendDifference) {

                    //best match reassigned the new friend
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        //save user's data to the database after checking
        friends.push(userData); 
        //return best match object in json format back to front end of the application
        res.json(bestMatch);
    });
}