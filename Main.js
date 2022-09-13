// queryselector
//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';

//var input = document.querySelector('input');
//input.value='Hello world'

//var input = document.querySelector('input[type="submit"]');
//input.value="SEND"

//var item =document.querySelector('.list-group-item');
//item.style.color='red';

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color ='blue';

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color ='green';

//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.color ='white';

//Queryselector all
var titles=document.querySelectorAll('.title')
console.log(titles);
titles[0],textcontent='Hello';

var odd=document.querySelectorAll('li:nth-child(odd');
var even=document.querySelectorAll('li:nth-child(even')
for (var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green'
    even[i].style.backgroundColor = '#f4f4f4';
}

