let person ={
    name : 'Sodor Uddin',
    age : 42,
    profession: 'developer',
    salary : 24000,
    isMarried: true
};

//Acceessing the property  using Dot 
// Dot Notation 
console.log(person);
console.log(person.salary);
let name = person.name;
console.log(name);


// Bracket-Notation were intoduced because dot notation can not always access the values of the object
//This notation is introduced to use it in some complex case only
console.log(person['age']);
let boyos = person['age'];