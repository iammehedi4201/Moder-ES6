const sum = (num1,num2) => console.log("The sum is:",num1+num2);

sum(10,20);

const catchValue = (num) => console.log("The result is:",num*2);

catchValue(10);

const aboutMe = () =>console.log("Hello There It's Me Mehedi Hasan");

aboutMe();

const calculation =(num1,num2) =>{

    const sum = num1 + num2;
    
    const multiply = num1 * num2;

    const total = sum + multiply;

    return total;
    
}

const getResult =  calculation(20,30);

console.log("The get Result is:",getResult);

const sumOfArray =(container) =>{

    let sum = 0;

    for(Element of container){

        sum = sum + Element;
        
        console.log("Step by step sum is:",sum);
    }

    return sum;
    
}

const listOfNum =[100,200,300,400,500,600,700,811];

// const sum = sumOfArray(listOfNum);

// console.log("The sum of list of num is:",sum);

// const calculation = (listOfNum) =>{

//     for(Element of listOfNum){

//         if (Element %2 == 0) {

//             console.log("The even Number is:",Element);
            
//         }

//         else
//         {
//             console.log("The odd number is:",Element);
//         }

        

//     }

// }

// calculation(listOfNum);


const play = (...n) =>
{

    console.log(n);

}

play(10,20,30,40);

