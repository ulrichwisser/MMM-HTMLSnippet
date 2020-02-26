# MMM-HTMLSnippet
MagicMirror module for external web widgets

This module loads a HTML snippet in an iFrame. The iframe will be positioned
as any other module would. (In the order of the configuration)
Optionally the content can be reloaded periodically.

## Screenshot
![Screenshot](https://raw.githubusercontent.com/eouia/MMM-HTMLSnippet/master/screenshot.png)

## Installation
```shell
cd ~/MagicMirror/modules/
git clone https://github.com/ulrichwisser/MMM-HTMLSnippet
```

## Configuration
### Format
```javascript
{
  module: "MMM-HTMLSnippet",
  position: "top_left",
  config: {
        html:``, //insert your script or html codes here.
        width: "800px",
        height: "400px",
        backgroundColor: "#FFF",
        updateInterval: 3600000,
      },
  },
}
```

### Example
```javascript
{
    module: "MMM-HTMLSnippet",
    position: "top_left",
        config: {
        html:`<div id='wrapper-ddnh'><span id='h2-ddnh'><a id='url-ddnh' href="//www.vackertvader.se/täby-erikslund"></a></span><div id='load-ddnh'></div><a id='url_detail-ddnh' href="//www.vackertvader.se/täby-erikslund"></a></div><script type="text/javascript" src="//widget.vackertvader.se/widgetv3/widget_request/90247681779?bgcolor=000000&border=none&days=5&key=-ddnh&lang=&maxtemp=yes&size=x120&textcolor=ffffff&unit=C&wind=yes" charset="utf-8"></script>`,
        width: "600px",
        height: "100px",
        backgroundColor: "#000",
        updateInterval: 3600000, // in milli seconds
    },
},

```
