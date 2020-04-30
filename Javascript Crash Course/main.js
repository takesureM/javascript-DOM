// Arrays - Variables that hold mutiple values
/*
line comment 
*/

// const Numbers = new Array(1,2,3,4,5);

// console.log(Numbers);


// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';

// fruits.push('mangos');

// fruits.unshift('strawberry');

// fruits.pop()

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('apples'));
// console.log(fruits);

// const person = {
//     firstName: 'Takesure',
//     lastName: 'Mamvota',
//     age: 23,
//     hobbies:['Music', 'Coding', 'Playing'],
//     address :{
//         street:'319 area 14',
//         city: 'Mutare'
//     }
// }
// const {firstName, lastName, address:{city}} = person;


// person.email = 'Takesure.com';

// console.log(person);

// const todos = [
//     {
//         id:1,
//         text:'Take out trash',
//         isComplited: true
//     },

//     {
//         id:2,
//         text:'Meeting with boss',
//         isComplited: true
//     },

//     {
//         id:3,
//         text:'date',
//         isComplited: false
//     }
// ];

// // forEach , map , filter

// const todoComplited = todos.filter(function(todo){
//     return todo.isComplited === true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoComplited);

// todos.forEach(function(todo){
//     console.log(todo)
// });

// for(let todo of todos) {
//     console.log(todo);
// }

// for(let i = 0; i < todos.length; i++) {
//           console.log('for loop Number: ${i}');
// }


// const todoJSON = JSON.stringify(todos);
//  // For Loop

//  for(let i = 0; i < 10; i++) {
//      console.log('for loop Number: ${i}');
//  }

 //While 
//  let i = 0;
//  while(i<10){
//      console.log(i);
//      i++;
//  }

const x = 10;
const y = 20;

if(x > 10 || y > 20){
    console.log('x is more than 10 or y is more than 20');
}