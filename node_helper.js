const bodyParser = require("body-parser")

var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
	start: function() {
		this.config = null
		this.pooler = []
	},

	socketNotificationReceived: function(notification, payload) {
		if (notification == "INIT") {
	  		this.config = payload
	  		this.webserver()
		}
  	},

	webserver: function() {
		this.expressApp.use(bodyParser.json())
		this.expressApp.use(bodyParser.urlencoded({extended: true}))
		this.expressApp.get("/MMM-HTMLSnippet", (req, res) => {
			res.status(200).send(this.config.html)
    	})
	}
})
