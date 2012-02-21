# porkRoll.js #
[https://github.com/kdubbicles/porkRoll.js/](https://github.com/kdubbicles/porkRoll.js)

Version: 1.0, Last updated: 2/21/2012

porkRoll.js is a simple way to define HTML structure in JSON, and have it returned as an HTML String.

## Documentation ##

###Build your JSON Object###

	var html = [

	{ "tag": "div", 

  		"attr": {
      	"id": "firstDiv",
      	"class": "divClass"
  		},
  		"contents": [
		  { 	"tag": "a",
          "attr": {
   		     "class": "linkClass",
   		     "href": "http://www.mediahive.com" 
   			  },
    		  "contents": [
    		  {   "tag": "img",
              "attr": {
                "src": "test.jpg"
              }
          },
          { 	"tag": "text",
          		"value": "text content goes here"
      		}
        	]
      }
      ]
	}
	]

### Nodes ###

* __tag__ - Regular HTML tag names go here. Use "text" for text content, and include a value node to specify your text value.

* __attr__ - You can include any inline level HTML tag attributes here.

* __contents__ - Put any elements you want nested within the current element within the contents array.

### Use ###

    porkRoll(html)

## Release History ##

1.0 - Initial release

## License ##
Copyright (c) 2011 Ken Wheeler

Dual licensed under the MIT and GPL licenses.

Free as in Bacon.