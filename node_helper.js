const bodyParser = require("body-parser")

var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({

	socketNotificationReceived: function(notification, payload) {
		if (notification == "INIT") {
                this.expressApp.use(bodyParser.json())
                this.expressApp.use(bodyParser.urlencoded({extended: true}))
                this.expressApp.get("/HTMLSNIPPET-"+payload.ident, (req, res) => { res.status(200).send(payload.html) })

		}
  	},
})
