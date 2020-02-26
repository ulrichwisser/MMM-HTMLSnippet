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
        var wrapper = document.createElement("div")
        wrapper.id = "HTMLSNIPPET"
        wrapper.className = "htmlsnippet module"
        wrapper.style.width = this.config.width
        wrapper.style.height = this.config.height
        wrapper.style.border = "none"
        wrapper.style.display = "block"
        wrapper.style.overflow = "hidden"
        wrapper.style.backgroundColor = this.config.backgroundColor
        wrapper.scrolling = "no"
        wrapper.innerHTML = this.config.html

        return wrapper
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
