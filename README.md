# search-and-rescue-introduction
This code was written by Tamar Shenhav
Last edited Oct. 2024

This is a web learning app about the Search and Rescue Brigade. 

All of the videos and graghics can be found in the mador's github, additionally there is an .ai file with illustrator created graphics that are used in the project.

Important notes about the code:
This is a single page app programmed using js vanilla. 
All elements are added to the DOM with js, except for complicated elements or ones that need to be accessible all throughout the app. 

The pages data is saved in js objects. It is named according to the page number- page2, page3…
Inside the page object, the key names consist of 5 options: el, img, car, func and evLis. 
It is followed by a number depicting the order of the element. 

The function that handles the page creation is createScreen. 
It analyses the object and calls for the correct function according to the action type. 

For “el” type key, the createTaxtElement function is called. 
It creates an html element using the array that is the value of the key: it is ordered as: html element tag name, class (or classes, in an array), id, text, and the id of the parent element. 
If some value is none, it will be left as “”. 

For “img” type key, the createImgElement function is called. 
It creates an image element using the data in the array, ordered as: src, alternative text, id, class (or classes), title, parent element id. 

For the “car” type key, the value calls for the createCarousel. 
It is used specifically for the details page, as the rest of the carousels that appear in the web app exist in the DOM from the start. 

For the “func” type key, the string is converted using window to the function that is called.
For the “evLis” type key, an event listener is added according to the data declared in the array: element id, event type, function. 

Note: all of the functions and variables that are used with this type of page creation, need to be declared using “var”, otherwise the variable/function will not be able to be used with this method. 

The nextPage function is also an important part of the web app, and is used to switch between pages. 
It relies heavily on the createScreen function.
The function removes all elements from the page element using inner html and adds the next page’s elements using createScreen. 
For the first chapter of the web app, there are complex animations added in the transition between pages, using setTimeOut. 
This function is also linked to the menu button, whom function is to move between the pages freely, as long as the page was visited before. For that purpose there is a progress variable- "furthestPageVisited"- that is updated in the nextPage function. 
It is also important to note that this variable is not changed when the web app is restarted. 
