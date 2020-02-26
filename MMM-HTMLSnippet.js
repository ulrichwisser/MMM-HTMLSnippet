/* Magic Mirror
* Module: MMM-HTMLSnippet
*
* By ulrichwisser
*/

const DefaultWidgetFormat = {
    url: "",
    position: "top_left",
    width: "200px",
    height: "200px",
    backgroundColor: "#000"
}


Module.register("MMM-HTMLSnippet",{
    defaults: {
        html: "",
    },

    start: function() {
        let self = this;

        // Schedule update timer.
        this.scheduleUpdate(2000);
    },

	scheduleUpdate: function(delay) {
		let nextLoad = this.config.updateInterval;
		if (typeof delay !== "undefined" && delay >= 0) {
			nextLoad = delay;
		}
		setTimeout(function() {
			this.updateDom();
			this.scheduleUpdate();
		}, nextLoad);
	},

    notificationReceived: function(notification, payload, sender) {
        if (notification == "DOM_OBJECTS_CREATED") {
            this.sendSocketNotification("START")
        }
    },

    getDom: function() {
        var iFrame = document.createElement("iframe")
        iFrame.id = "HTMLSNIPPET"
        iFrame.className = "htmlsnippet module"
        iFrame.style.width = this.config.width
        iFrame.style.height = this.config.height
        iFrame.style.border = "none"
        iFrame.style.display = "block"
        iFrame.style.overflow = "hidden"
        iFrame.style.backgroundColor = this.config.backgroundColor
        iFrame.scrolling = "no"
        iFrame.src = this.config.html

        return iframe
    },

    suspend: function() {
        var doms = document.getElementsByClassName("htmlsnippet")
        if (doms.length > 0) {
            for (let dom of doms) {
                dom.style.display = "none"
            }
        }
    },

    resume: function() {
        var doms = document.getElementsByClassName("htmlsnippet")
        if (doms.length > 0) {
            for (let dom of doms) {
                dom.style.display = "block"
            }
        }
    },

}
)
