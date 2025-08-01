// One of the basic data type 
//String is a special type of data in javascript
let country = 'Bangladesh'; //One type of declearing string

let division = 'New Dacca of this New BD'; //Second type of declearing String

let district = `Barisal`; //Declearing String Using BackTick, one of the powerful thing with backtick

const thana = new String('Demra');  //Rarely Used, Used as object, used for some special purpose only

console.log(typeof thana);
console.log(thana);

// The array is mutable means here the number or elemets of the array is changeable  
let numbers = [1, 4, 9, 89, 10, 11];
console.log('Length of the array is : ',numbers.length);
console.log(numbers[0]);
console.log(numbers);
numbers[0] = 98;
console.log(numbers);


//String is like array but string is not changeable like an array thats one of the key difference
// String is Immutable means the string is not changeable 
let capital = 'Dhaka';
console.log(capital);
console.log(capital.length);
console.log(capital[0]);
console.log(capital[3])
capital[0] = 'Q';
console.log(capital);