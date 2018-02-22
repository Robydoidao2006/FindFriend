friends = require("../data/friends.js");

module.exports = function (app) {

	

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	}); 

	app.post("/api/friends", function(req, res) {

		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 40
        };
    })
}

	for (var i = 0; i < friends.score.length; i++) {
        friends.push(userData);	
        bestMatch.push(userData);

    }

    
     