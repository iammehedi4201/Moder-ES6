const listOfArray =[10,20,30,40,50,60,70];

// console.log("The list of Array is:",listOfArray);

// console.log("The list of Array Element are:",...listOfArray);

// const maxNumber =Math.max(...listOfArray);

// const minNumber =Math.min(...listOfArray)

// console.log("The max number is:",maxNumber);

// console.log("The mini Number is:",minNumber);

// let newArray = [];
//     newArray =[...listOfArray,500,1000];

// listOfArray.push(100);

// listOfArray.push(200);

// console.log("The old Array is:",listOfArray);

// console.log("The New Array is:",newArray);

// const listOfString =['hello',"my","name"];

// const concateTwoArray =[...listOfArray,...listOfString]

// console.log("The combination of two is:",concateTwoArray);




// console.log(...listOfString);


function add(num1,num2) {
    
    console.log(arguments);
}

add(...listOfArray)
