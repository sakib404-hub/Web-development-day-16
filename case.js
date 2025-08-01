let school = 'Rajuk Uttora Model School and Collage';

let subject = 'Chemistry';
let book = 'chemistry';

// Comparison of the string is case Sensetive means capital(C) and small latter(c) is not the same
if(subject === book){
    console.log('Pore Fathai Dibo');
}
else{
    console.log('Hudai Hudai prista Ultai');
}

console.log('To lowerCase Function : ',school.toLowerCase());  //printing all the latters in lower case
console.log('Normal : ',school); // It is as it is known as mixed case
console.log('To upperCase Function : ', school.toLocaleUpperCase()); // it is used to take all the latters to uppercase

// now to remove case sensitivity we can use toLowerCase() function 
if(subject.toLowerCase() === book.toLowerCase()){
    console.log('Ok, We know how to remove case-sensitivity');
}


let drink ='water';
let liquid = ' water ';
//Remove the white space from before the string and after the string
if(drink.trim == liquid.trim){
    console.log('Pani Er opor nam Jibon');
}
else{
    console.log('Muri Kha');
}