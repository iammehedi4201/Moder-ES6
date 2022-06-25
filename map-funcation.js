const listOfNumbers =[11,20,33,40,55,60];

 

// const container =[];

// const dobuleIt =(num) => num*2;

// for (const number of listOfNumbers) {

//     let result = dobuleIt(number);

//     container.push(result);
    
// }

// console.log("The container Array is:",container);

// const evanContainer =[];

// const oddContainer = [];

// const getEvenNumber = (num) => {

//     // if (num%2 == 0) {

//     //     evanContainer.push(num);      
//     // }

//     // else
//     // {
//     //     oddContainer.push(num);
//     // }

//     (num%2) ? evanContainer.push(num) :  oddContainer.push(num);

// }


// listOfNumbers.map( num => {

    
//     num%2 ? evanContainer.push(num) :  oddContainer.push(num);

// }
// );

// console.log("The even container is :",evanContainer);

// console.log("The odd container is :",oddContainer);


const aboutMe =["Hello","Mehedi","Hasan"]

const lengthList= aboutMe.map(num => {

    return num.length
 }
    )

    console.log("The length lis is:",lengthList);

   
const arrayLikeObject =[
    {name:"Mehedi",height:7,blood:"A+"},

    {name:"Shoaib",height:6,blood:"B+"},

    {name:"Tanim",height:4,blood:"o+"}

]

const getName = name =>
{
    return name.name
}


const nameContainer = arrayLikeObject.map( name => name.blood);

console.log(nameContainer);


const little =[]; 

