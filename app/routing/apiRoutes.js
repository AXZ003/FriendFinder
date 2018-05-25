// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");
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
    var body = req.body;
    console.log(body);

    var outside = [];
    var outsideTwo = [];


		for(var k = 0; k < friendsData.length; k++) {
      var inside = []
        for (var i = 0; i < body.scores.length; i++) {
          var minus = Math.abs(friendsData[k].scores[i] - body.scores[i])
          inside.push(minus)
        }
      outsideTwo.push(inside)
    }

    // outside is the sum of difference comparing the new score with the friends data


    for (var i = 0; i < outsideTwo.length; i++) {
			// console.log(outsideTwo[i])
			var sum = outsideTwo[i].reduce(function(all,item,index) {
			return all+=item
			}, 0)
			// console.log(sum2)
			outside.push(sum)
    }
    

    var index = 0, lowest = outside[0]
		for (var i = 0; i < outside.length; i++) {
			if (outside[i] < lowest) {
				lowest = outside[i]
				index = i
      }
    }

    console.log(index)
		console.log(lowest)

		res.json(friendsData[index])

    // if (friendsData.length < 5) {
    //   friendsData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];
    // waitListData = [];

    console.log(friendsData);
  });
};
