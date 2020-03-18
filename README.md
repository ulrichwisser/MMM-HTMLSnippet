# MMM-HTMLSnippet
MagicMirror module for external web widgets

- This module loads a HTML snippet in an iFrame. (The iframe is needed to make script tags work.)
- The iframe will be positioned as any other module would. (In the order of the configuration)
- Optionally the content can be reloaded periodically.

## Screenshot
![Screenshot](https://github.com/ulrichwisser/MMM-HTMLSnippet/blob/master/HTMLsnippet-screenshot-weather1.png?raw=true)

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
        width: "600px",
        height: "300px",
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
        html:`<div id='wrapper-ELec'><span id='h2-ELec'><a id='url-ELec' href="//www.vackertvader.se/täby-erikslund">Vädret i Erikslund</a></span><div id='load-ELec'></div><a id='url_detail-ELec' href="//www.vackertvader.se/täby-erikslund">Detaljerad väderprognos</a></div><script type="text/javascript" src="//widget.vackertvader.se/widgetv3/widget_request/90247681779?bgcolor=000000&border=none&days=5&key=-ELec&lang=&maxtemp=yes&size=x120&textcolor=ffffff&unit=C&wind=yes" charset="utf-8"></script>
`,
        width: "600px",
        height: "100px",
        backgroundColor: "#000",
        updateInterval: 3600000, // in milli seconds
    },
},

```

Note: The weather widget in the example is taken from https://www.vackertvader.se/. Please refer to their homepage for License and copyright information. At the time of my publishing it said it was free to use whereever you want.
