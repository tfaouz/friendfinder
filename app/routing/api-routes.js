const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        let bestFriendMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        console.log(req.body);
        const userData = req.body;
        const userScores = userData.scores;
        console.log(userScores)

        let totalDifference = 0;

        for (let i = 0; i < friends.length; i++) {
            // console.log(friends[i].name); //
            totalDifference = 0;

            // 4loop goes through the friends and goes through their scores //
            for (let j = 0; j < friends[i].scores[j]; j++) {

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // finds difference between match //
                if (totalDifference <= bestFriendMatch.friendDifference) {

                    bestFriendMatch.name = friends[i].name;
                    bestFriendMatch.photo = friends[i].photo;
                    bestFriendMatch.friendDifference = totalDifference;
                }
            }
        }
        friends.push(userData);
        //returns json for best match, doesnt work//
        //fixed//
        console.log(`returning best friends match: ${bestFriendMatch}`);
        res.json(bestFriendMatch);
    });
}