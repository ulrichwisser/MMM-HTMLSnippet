# MMM-HTMLSnippet
MagicMirror module for external web widgets

- This module loads a HTML snippet in an iFrame. (The iframe is needed to make script tags work.)
- The iframe will be positioned as any other module would. (In the order of the configuration)
- Optionally the content can be reloaded periodically.
- if you have several instances of the module each one needs a unique ident
- to be save use only a-z and 0-9 in your ident
- color might does not have the desired effect as the iframe loads it's own DOM with it's own style

New version! Needs changes in configuration.



## Screenshot
![Screenshot](https://github.com/ulrichwisser/MMM-HTMLSnippet/blob/master/HTMLsnippet-screenshot-weather1.png?raw=true)

## Installation
```shell
cd ~/MagicMirror/modules/
git clone https://github.com/ulrichwisser/MMM-HTMLSnippet
```

## Configuration

Every instance of the module need to have a unique "ident" set.

`suspendPage` changes the behaviour of hiding or showing the snippet. If `true`, the page will be set to `display=none`, unloading the page causing a reload on resume. If set to `false`, it will alter the visible flag, leaving the page loaded. This can be helpful for slow loading pages.

### Format
```javascript
{
  module: "MMM-HTMLSnippet",
  position: "top_left",
  config: {
    width: "600px",
    height: "300px",
    backgroundColor: "#FFF",
    color: "#000#,
    updateInterval: 3600000,
    ident: "identifier",
    suspendPage: true,
    frames: [
      { html:``}, // insert your script or html codes here.
      { src: ``}, // insert url here
    ]
  }
}
```

### Example
```javascript
{
  module: "MMM-HTMLSnippet",
  position: "top_left",
  config: {
    width: "600px",
    height: "100px",
    backgroundColor: "#000",
    color: "#FFF",
    updateInterval: 3600000, // in milli seconds
    ident: "snippet1",
    suspendPage: false,
    frames: [
      {
        html:`<div id='wrapper-ELec'><span id='h2-ELec'><a id='url-ELec' href="//www.vackertvader.se/täby-erikslund">Vädret i Erikslund</a></span><div id='load-ELec'></div><a id='url_detail-ELec' href="//www.vackertvader.se/täby-erikslund">Detaljerad väderprognos</a></div><script type="text/javascript" src="//widget.vackertvader.se/widgetv3/widget_request/90247681779?bgcolor=000000&border=none&days=5&key=-ELec&lang=&maxtemp=yes&size=x120&textcolor=ffffff&unit=C&wind=yes" charset="utf-8"></script>`,
      }
    ]
  }
}

```


### Grafana example

![Screenshot](https://github.com/ulrichwisser/MMM-HTMLSnippet/blob/master/HTMLSnippet-screenshot-grafana.png?raw=true)

```javascript
{
  module: "MMM-HTMLSnippet",
  position: "top_left",
  config: {
    width: "180px",
    height: "100px",
    backgroundColor: "#000",
    color : "#FFF",
    updateInterval: 3600000, // in milli seconds
    ident: "random2",
    suspendPage: false,
    frames : [
      { src: 'http://127.0.0.1:3000/d-solo/D0UaMxyWz/screen1?orgId=1&panelId=17' },
      { src: 'http://127.0.0.1:3000/d-solo/D0UaMxyWz/screen1?orgId=1&panelId=20'},
      { src: 'http://127.0.0.1:3000/d-solo/D0UaMxyWz/screen1?orgId=1&panelId=21'},
    ]
  },
},
 
Note: The weather widget in the example is taken from https://www.vackertvader.se/. Please refer to their homepage for License and copyright information. At the time of my publishing it said it was free to use whereever you want.
