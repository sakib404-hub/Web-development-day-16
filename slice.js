let address = 'AndorKlla';

// slice(start?: number, end?: number)
//slice(starting index, ending index)
let part = address.slice(2, 5);
console.log(part);

let sentence ='I am a good and hard working person';
console.log(sentence);

//Split is used when we want to separate all the word available in the sentence and hece we use [split(' ')]
console.log(sentence.split(' '));

//we can also split the sentence using a character also like this
console.log(sentence.split('a'));

let friends = 'Rahim,karim,jobber,motlob,kuddus';
let arrFriends = friends.split(',');
console.log(arrFriends);

console.log(arrFriends.join());
console.log(arrFriends.join('|'));
console.log(arrFriends.join('-'));


let fName = 'abid';
let lName = 'Hossain';
// let fullName = fName + lName;
// let fullName = fName + ' '+lName;
let fullName = fName.concat(' ').concat(lName);
console.log(fullName);

console.log(lName.includes('Hossain'));


