// let paragraph = "Hello This is Mehedi Hasan.\n" +
// "I am 25  years Old";

// let paragraph =`Hello This is Mehedi Hasan.
// I am 25 years old.
// I am a student of Daffodil International university.`; 

// console.log(paragraph);

// let firstName = "Mehedi";

// let lastName = "Hasan";

// let fullName = firstName +" "+ lastName; //Old Method

// let newFullName = `Using New Method to create My New Full Name(${firstName} ${lastName  })is: ${firstName} ${lastName} ` //New Method

// console.log("The Full Name is:",fullName);

// console.log(newFullName);

const array = [`Mehedi`,`Shoaib`,`saiful`,`Even`];

let aboutMe = `Mehedi's friends name is: ${array[0]} , ${array[1]}`;

console.log(aboutMe);

const salarys=[100,200,500,1000];

for (let index = 0; index <4; index++) {
    
    console.log(`${array[index]}'s salary is ${salarys[index]} is a very ${salarys[index]<=1000 ? "Low" : "High"} salary `);
    
}

let updateAge = 30;

let updateText = ` Hello There I am ${updateAge} Years Old`;

console.log(updateText);

function hello () {

    return "Mehedi Hasan"
    
}


const textMe = `hello there my name is ${hello()}`

console.log("Text Me is:",textMe);

