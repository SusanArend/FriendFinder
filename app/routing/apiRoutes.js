// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");
var path = require("path");

var totalDifference = 0;
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the friends)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    
    var bestMatch = {
      name: "",
      image: "",
      matchDifference: 1000
    };

    var userData = req.body;
    var userName = userData.name;
    var userImage = userData.image;
    var userScores = scores;

    var totalDifference = 0;

    for(var i = 0; i < [friendData].length - 1; i++) {
      console.log(friends[i].name);
      totalDifference = 0;

      for(var x = 0; x <10; x++) {
        totalDifference += Math.abs(parseInt(userScore[x]) - parseInt(friendData[i].scores[x]));

        if (totalDifference <= bestMatch.friendDifference){

          bestMatch.name = friendData[i].name;
          bestMatch.photo = friendData[i].photo;
          bestMatch.matchDifference = totalDifference;

        }
      }
    }

    friendData.push(userData);
    res.json(bestMatch)

  });

};










