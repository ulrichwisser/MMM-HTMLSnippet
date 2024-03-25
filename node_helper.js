const bodyParser = require("body-parser")

var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({

    socketNotificationReceived: function(notification, payload) {
        if (notification == "INIT") {
            this.expressApp.use(bodyParser.json());
            this.expressApp.use(bodyParser.urlencoded({ extended: true }));

            // frames with html defined will retrieve data from the mothership
            for (var i = 0; i < payload.frames.length; i++) {
                if (payload.frames[i].html !== undefined) {
                    var index = i // conserve value in local variable, needed for enclosure to work
                    this.expressApp.get("/HTMLSNIPPET-" + payload.ident + "-" + index, (req, res) => {
						res.status(200).send(payload.frames[index].html); });
                }
            }

            // initialization done
            this.sendSocketNotification('INIT_DONE', { });
        }
    },
})
