//Dom and how it relates to the html elements of a webpage

//DOM - A object representation of the html elements of a webpage
//The DOM is an API that is a bridge between content and the browser

//The DOM is not JS even though it is manipulated with JS
//The DOM is not HTML CSS or static

//The DOM is a language neutral API
//The DOM has a tree like structure representing content, structure and style
//The DOM is dynamic, as we change it we can immediately see the changes

//When the DOM is built and the webpage is loaded there are dozens of methods and properties that we gain access to
//All of these methods and properties can be used to manipulate what we see on the screen

//Nodes and types
//Inside of the DOM all things that are representative are nodes. Nodes have different types.

//Document-->
//node : element  --->html
//node: element
//--->head--->title--->'Example
//node: element         //node: text
/****************************************************************************
 * Dom Element Selectors Applied JavaScript
 */

document.getElementsByTagName('div');
//The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name. The complete document is searched, including the root node. The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName() again.

document.getElementsByClassName('nav-item');
//The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class names.

document.getElementById('') //Will return a singular element referenced by the #ID

//The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

//If you need to get access to an element which doesn't have an ID, you can use querySelector() to find the element using any selector.

document.querySelector('enter a CSS Selector here. Any CSS Selector') //accepts the value of any CSS Selector
//The Document method querySelector() **returns the first Element within the document that matches the specified selector**, or group of selectors. If no matches are found, null is returned.

document.querySelectorAll('')
//The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.


//The difference between a node list and an HTML collection
//They are both array like objects with a 0 based index with a .length ability
//node list can use forEach but cannot use most methods
//to turn the nodelist into an array to be able to use methods on it const arr = Array.from(nodelist)

/***************************************************************************************************************8
 * DOM Properties and Methods
 */
const introText = document.querySelector('#intro-text')
//sets a variable to the selected element

introText.style.fontSize = '4rem'
introText.style.color = 'red'
//The style method in the DOM will set an inline style that will take precedence over all other styling except the important

const header = docuiment.querySelector('header')
header.className = 'green'; //will set the class name to the assigned value
header.classList //Will return all of the classes on an element
header.classList.add('large') //will add another class selector to an elements class list
header.classList.remove('large') //will remove class selector from an elements class list
header.classList.toggle('green') //will toggle an element on or off depending on whether it is present or not

/********************************************************************
 * DOM createELement
 */
const headerElement = document.querySelector('header');

const subHeadline = document.createElement('h1') //creates a new element in js memory
subHeadline.textContent = 'Another Headline'; //adds text content to the created element
subHeadline.style.fontSize = '3.4rem'; //element can now be styled
subHeadline.style.color = 'slategrey'; //adding color style to element

headerElement.appendChild('subHeadline') //creates a new child and puts it at the end of the selected element(headerElement)
//////////////////////////////////////////////////////////////
const section = document.querySelector('section');
section.style.flexWrap = 'wrap';
section.style.justifyContent = 'center';

const newCat = document.createElement('img'); //creates a new image
newCat.src = 'insert cat image url here' // adds the src to the created element
newCat.style.marginRight = '20px' //sets a style for the created element

section.prepend(newCat) //adds a child to the beginning of a selected element

/******************************************************************************************8
 * Selectors Challenge
 */
/*
  Request 1: Log the result of every `a` element on the page. The result should be an `HTMLCollection`
*/
anchorTags = document.getElementByTagName('a')
//const anchorTags;
console.log(anchorTags);

/* 
  Request 2: Log the result of every `a` element on the page. The result should be a `NodeList`
*/
const moreAnchorTags = document.querySelectorAll('a')
// const moreAnchorTags;
 console.log(moreAnchorTags);

/* 
  Request 3: Locate the ID in the HTML. Log the element that the ID is on.
*/
customId = document.getElementById('#first-heading')
// const customID;
 console.log(customID);

/* 
  Request 4: Log the first class that matches ".main-content"
*/
cosntmainContent = document.querySelector('.main-content')
// const mainContent;
 console.log(mainContent);

/* 
  Request 5: Log the third element with a class of ".nav-item"
*/
const thirsNavItem = document.querySelector('.nav-item')[2]
// const thirdNavItem;
console.log(thirdNavItem);
/******************************************************************************************8
 * MOST COMMONLY USED METHODS AND PROPERTIES
 */
/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////
.textContent
Gets and sets the text of an element. Essentially whatever text is between the open and closing tags of an HTML element.
Can use the assignment operator ( = ) to reset the text of an element
Setting this property on a node removes all of its children and replaces them with the new single text node.
<div>Something Here</div>
element.textContent = 'Something New;

////////////////////////////////////////////////////////////////////////////////////////////////////////////

.setAttribute() (or .{attr})
This method (or property) is used as a way to set or reassign an attribute on the element.
‘.setAttribute()’ is a method that takes two arguments, the attribute to set, and the value to set to that attribute.
eg: element.setAttribute('src', 'http://www.imagsource.com/image.jpg')
Can also use the pattern: element.'attrName' = ‘value’.
eg: element.src = 'http://www.imagsource.com/image.jpg'

////////////////////////////////////////////////////////////////////////////////////////////////////////////

.style
Every element contains a style object. This property accesses that style object. The style object contains every available style as a key and a value as the value. It is important to note, that these are NOT the CSS styles, these are inline HTML styles.
These styles are associated with the HTML inline style set on the element
eg: <div style=“color: red;”>DIV STUFF</div>
You can access and change a property on the style object by using the assignment operator =.
eg: element.style.color = ‘blue’;
Changing a property on the style object will effectively give this element an inline style.
Inline styles have the highest specificity, overriding any other selector except !important.
VERY IMPORTANT to note that this does NOT access or change anything in the CSS file.

////////////////////////////////////////////////////////////////////////////////////////////////////////////
.className, .id
.className accesses or assigns a string containing all of the classes on the element.
.id accesses or assigns a string containing the id of the element.

////////////////////////////////////////////////////////////////////////////////////////////////////////////
.classList
classList will return an array-like object of all the classes on the element. There are a number of useful methods available on classList.
classList is a DOMTokenList.
A DOMTokenList is an array-like object with a numerical zero-based index, a length property, also the .contains() and .forEach() methods.
Most notably the methods .add() .remove() and .toggle() exist. All three take a single string representing the class.
.add('className') and .remove('className') do as their names indicate.
.toggle('className') will add the class if it does not exist and remove it if if does.

////////////////////////////////////////////////////////////////////////////////////////////////////////////
.appendChild() and .prepend()
These methods are used for adding child elements to parent elements.
.appendChild(child) will take an element and add it to it children. It will add it to the ‘end’ physically so if the children are displayed in order it will be the last.
eg: parentElement.appendChild(childElement)
.prepend(child) adds a child to the beginning, displaying it first.
eq: parentElement.prepend(childElement)
.children and .parentNode

////////////////////////////////////////////////////////////////////////////////////////////////////////////
These properties are used for accessing relatives of the element.
.children returns an HTMLCollection of all the children of that element.
.parentNode returns the parent element of that element.

*/
/**************************************************************************************
 * Lecture
 * Document Object Model with Josh Knell
 */

 //When we write HTML it gets converted into objects which we call nodes that mostly are elements about 90% the other 10% are txt and other properties

 //single element DOM selectors

 const btnId = document.getElementById()
















