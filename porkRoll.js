/**************************************************************

                     _____                     
                /)  (, /   )    /) /)     ,    
    __   _____ (/_    /__ / ___// //        _  
    /_)_(_)/ (_/(__) /   \_(_)(/_(/_ o   /_/_)_
 .-/              (_/                 .-/      
(_/                                  (_/       
      ___
         ',_`""\        .---,
            \   :-""``/`    |
             `;'     //`\   /
             /   __     |   ('.
            |_ ./O)\     \  `) \
           _/-.    `      `"`  |`-.
       .-=; `                  /   `-.
      /o o \   ,_,           .        '.
      L._._;_.-'           .            `'-.
        `'-.`             '                 `'-.
            `.         '                        `-._
              '-._. -'                              '.
                 \                                    `\
                  |                                     \
                  |    |                                 ;   _.
                  \    |           |                     |-.((
                   ;.  \           /    /                |-.`\)
                   | '. ;         /    |                 |(_) )
                   |   \ \       /`    |                 ;'--'
                    \   '.\    /`      |                /
                     |   /`|  ;        \               /
                     |  |  |  |-._      '.           .'
                     /  |  |  |__.`'---"_;'-.     .-'
                    //__/  /  |    .-'``     _.-'`
                          //__/   //___.--''` 


By: Ken Wheeler
Date: 02/21/2012
Url: http://www.mediahive.com


-----------------
| Description:  |
-----------------

porkRoll.js is a simple way to define HTML structure in JSON, and have it returned as an HTML String.

-----------------
| Example Usage |
-----------------

Build your JSON Object:

----------------------------------------------

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
    	{ 	"tag": "img",
    		  "attr": {
    			"src": "test.jpg"
    		  }
		  },
      {   "tag": "text",
          "value": "text content goes here"
      }
    	]
    }
    ]
}

]

----------------------------------------------

Nodes

	a. tag - Regular HTML tag names go here. Use "text" for text content, and include a value node to specify your text value.
	b. attr - You can include any inline level HTML tag attributes here
	c. contents - Put any elements you want nested within the current element within the contents array.

----------------------------------------------

Use:

porkRoll(html)

**************************************************************/

var porkRoll = function(jsonString){

	var numberOfElements = jsonString.length;

	var htmlString = "";

	if(numberOfElements>0){

	var recurseJSON = function(jsonData){

		if(jsonData.tag == "text"){

		htmlString += jsonData.value + '\r\n';
			
		} else {
		
		htmlString += "<" + jsonData.tag;

		if(jsonData.attr) {

		for(attr in jsonData.attr){
			htmlString += ' ' + attr + '="' + jsonData.attr[attr] + '"';
		}

		}

		if((jsonData.tag !== "img") && (jsonData.tag !== "br") && (jsonData.tag !== "hr")) {

		htmlString += ">\r\n";

		if(jsonData.contents){

			for(el in jsonData.contents) {
			
			recurseJSON(jsonData.contents[el]);

			}

		}

		htmlString += "</" + jsonData.tag + ">\r\n";

		} else {
		
		htmlString += "/>\r\n";

		}

		}

	}

	for(el in jsonString){

	recurseJSON(jsonString[el]);

	}

	}

	return htmlString;
	
}