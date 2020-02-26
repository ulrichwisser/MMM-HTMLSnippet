# MMM-Widget
MagicMirror module for external web widgets

## Screenshot
![Screenshot](https://raw.githubusercontent.com/eouia/MMM-Widget/master/screenshot.png)

## Installation
```shell
cd ~/MagicMirror/modules/
git clone https://github.com/eouia/MMM-Widget
```

## Configuration
### Format
```javascript
{
  module: "MMM-Widget",
  config: {
    widgets: [
      {
        html:``, //insert your script or html codes here.
        position: "top_left",
        width: "800px",
        height: "400px",
        backgroundColor: "#FFF"
      },
      ... // If you want to display several widgets, add here.
    ]
  }
}
```

### Example (Screenshot)
```javascript
{
  module: "MMM-Widget",
  config: {
    widgets: [
      {
        html:`
        <!-- TradingView Widget BEGIN -->
        <div class="tradingview-widget-container">
          <div id="tv-medium-widget"></div>
          <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/AAPL/" rel="noopener" target="_blank"><span class="blue-text">Apple Quotes</span></a> by TradingView</div>
          <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
          <script type="text/javascript">
          new TradingView.MediumWidget(
          {
          "container_id": "tv-medium-widget",
          "symbols": [
            [
              "Apple",
              "AAPL "
            ]
          ],
          "greyText": "Quotes by",
          "gridLineColor": "#e9e9ea",
          "fontColor": "#83888D",
          "underLineColor": "#dbeffb",
          "trendLineColor": "#4bafe9",
          "width": "800px",
          "height": "400px",
          "locale": "en"
        }
          );
          </script>
        </div>
        <!-- TradingView Widget END -->
        `,
        position: "top_left",
        width: "800px",
        height: "400px",
        backgroundColor: "#FFF"
      },
      {
        html:`<script type="text/javascript" src="http://www.mta.info/sites/all/libraries/mta_WidgetScripts/serviceStatusWidget.js"></script>`,
        position: "top_left",
        width: "400px",
        height: "500px"
      },
      {
        html:`
<a class="weatherwidget-io" href="https://forecast7.com/en/40d71n74d01/new-york/" data-label_1="NEW YORK" data-label_2="WEATHER" data-theme="original" >NEW YORK WEATHER</a>
<script>
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
</script>
        `,
        position: "top_right",
        width: "300px",
        height: "600px",
      }
    ]
  }
},
```

### Tip
You could have a problem of syntax error, when your script codes have too long and multi lines.
Use these ways;
- ES5 Style
```javascript
html: "your very very very very very very \
long long long long long long script",
```

- ES6 Style (Recommended. You don't need to escape quotation and double quotation marks.)
```javascript
html: `your very very very very very very
long long long long long long script`,

```
