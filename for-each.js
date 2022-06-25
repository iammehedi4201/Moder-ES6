const myFunction = (item,index,arr) =>
 {
   
    console.log("The item is:",item);

    console.log("The index is:",index);

    arr[index] = item*10;

    


 }

 const listOfNumbers =[11,20,33,40,55,60];

 listOfNumbers.map(myFunction)

 console.log("The list of Numbers is:",listOfNumbers);


 const red = listOfNumbers.forEach( num =>
    {
        return num*2;
    })

console.log("The red is:",red);