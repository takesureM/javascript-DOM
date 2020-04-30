// Examine the document object//
//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[9].textContent = 'Takesure';

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// GET ELEMENT BY ID//

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle);

// headerTitle.textContent = 'Takesure';
// headerTitle.innerText = 'DIANA';

// headerTitle.innerHTML = '<h3> Takesure <?h3>';
// header.style.borderBottom = 'solid 3px red';

// GETELEMENTSBYCLASSNAME//

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// //items.style.backgroundColor = 'grey';

// for(var i = 0; i <items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';

// }

// Getelementsbytagname

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// //items.style.backgroundColor = 'grey';

// for(var i = 0; i <li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';

// }

//QUERYSELECTOR//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Takesure';

// var submit = document.querySelector('input[type="submit"]');
// submit.value ='SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'blue';


// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'grey';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'red';

// QuerySellectAll//

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Takesure';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');


// for( var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = 'grey';

//     // odd[i].style.borderRadius = '15px';
// }

// TRAVERSING THE DOM//

var itemList = document.querySelector('#items');
// parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//ChildNode

// console.log(itemList.childNodes);

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Takesure Mamvota';

// lastChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Takesure Mamvota';

//nextSibling

// console.log(itemList.nextSibling);

// //NextElementSibling
// console.log(itemList.nextElementSibling)

// previousSibling
// console.log(itemList.previousSibling);

// previosElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';

//Create a div

// var newDiv = document.createElement('div');

// //Add Class
// newDiv.className = 'header';

// //Add id
// newDiv.id = 'main-header';

// //Add attr
// newDiv.setAttribute('title', 'Hello Takesure');

// // create a text node
// var newDivText = document.createTextNode('Hello Takesure');

// //Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '30px';
// console.log(newDiv);

//EVents //

// var button = document.getElementById('button').addEventListener
// ('click', buttonClick)


// function buttonClick(e){
//     // console.log('Button clicked');
// //     document.getElementById('header-title').textContent = 'Tiripamwepo';
// //     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
 var output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+e.target.id+'</h3>';

//     // console.log(e.type);

//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
//     // console.log(e.tabKey);

// }

var button = document.getElementById('button');
var box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);


// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// itemInput.addEventListener('input',runEvent);

// select.addEventListener('change',runEvent);
form.addEventListener('submit',runEvent);







function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
    // itemInput.style.backgroundColor = "blue";
    // itemInput.style.fontSize = "30px";
    // itemInput.style.color = "#fff";
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>MouseX: '+e.offseggggfgftX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';

//     document.body.style.backgroundColor = "rgb("+e.offsetX+","
//     +e.offsetY+", 40)";
// 

}