//require data from friends.js
var friends = require('../data/friends');
 
module.exports = function (app) {
    //route for viewing all friends
    app.get('/api/friends', function(req, res) {
        //parameter is variable created above- return all friends
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        
        // var newPerson = {
        //         name: req.body.name,
        //         photo: req.body.photo,
        //         scores: [
        //             parseInt(req.body.scores[0]),
        //             parseInt(req.body.scores[1]),
        //             parseInt(req.body.scores[2]),
        //             parseInt(req.body.scores[3]),
        //             parseInt(req.body.scores[4]),
        //             parseInt(req.body.scores[5]),
        //             parseInt(req.body.scores[6]),
        //             parseInt(req.body.scores[7]),
        //             parseInt(req.body.scores[8]),
        //             parseInt(req.body.scores[9]),
        //             parseInt(req.body.scores[0])
        //         ]
        //     }


            console.log(req.body);

        friends.push(req.body);

    })
        
}