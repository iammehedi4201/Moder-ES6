const  listOfProducts = [

    "I Have a power Bank Of White Color",

    "I have a Huawei Mate 20 black Phone",
      
    "I have a black Pc",

    "I have a Black Airpods", 

    "I Have a white tripods"

]

let details ="Mehedi is a Good Boy"

let result =details.split(" ");

result.pop()

console.log("The New Array is:",result);

let first = "Mehedi";

let last = "Hasan";

const NewResult = first.concat(" ",last);

console.log(NewResult);

let output = listOfProducts.join(" IN ");

console.log("The output is:",typeof output);

const listOfAge = [10,20,30,40,50,60,70];

let numSplice = listOfAge.splice(3,2);

console.log("The num of splice is:",listOfAge);

// const searching ="color"

// const output = [];


// // for(const age of listOfAge)
// // {
// //     console.log("The value of -",age,"Index is",listOfAge.indexOf(age));
// // }

// for(const product of listOfProducts)
// {
//     if (product.toLowerCase().endsWith(searching.toLowerCase())) {

//         output.push(product);
        
//     }
// }




// // for(const product of listOfProducts)
// // {
// //     // if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1 ) {

// //     //      output.push(product);

// //     // }

// //     if (product.toLowerCase().includes(searching.toLowerCase())) 
// //     {
 
// //         output.push(product)
        
// //     }
// // }

// console.log("The output is:",output);