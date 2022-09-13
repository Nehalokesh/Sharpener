// Traversing The Dom
var itemList =document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor ='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parent Element
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor ='#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

// child Nodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor ='yellow';

// First Child
console.log(itemList.firstChild);
// // FirstElementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent ='Hello 1';

// last child
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent ='Hello 4';

//next sibling
console.log(itemList.nextSibling);

//next elementsibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previouselementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color ='green';

// Create Element
//Create div
var newDiv = document.createElement('div');

// ADD class
newDiv.className ='hello';

// add id
newDiv.id='hello1';


// add attr
newDiv.setAttribute('title', 'hello div');

// create text node
var newDivText = document.createTextNode('Hello');

// ADD text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize= '30px';

container.insertBefore(newDiv, h1);