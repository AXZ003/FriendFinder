// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");
// var waitListData = require("../data/waitlistData")


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });




  // API POST Requests

  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference;

    console.log(userData);

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };


    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < friendsData.length; i++) {
      var currentFriend = friendsData[i];
      totalDifference = 0;

      // console.log(currentFriend.name);

      // We then loop through all the scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).
    friends.push(userData);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);

  });


};
