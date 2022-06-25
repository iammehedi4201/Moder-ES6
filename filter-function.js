const listOfNum = [10,5,11,8,20,7,12,15,10];

const listOfNames = ["Mehediee","Hasan","Tanimeeeeeeee","Sakibadaddadass"];

const myFunction = (num) =>
{
  
    return num ==10;

}

const minNums =listOfNum.filter(myFunction);

console.log("The min Nums is:",minNums);

const megafriend = (name) =>
{     
   
    return name.length >5;

}



const mageName = listOfNames.filter(megafriend);

console.log("The mega Name is:",mageName);

const arrayLikeObject =[
    {name:"Mehedi",height:7,blood:"A+"},

    {name:"Shoaib",height:6,blood:"B+"},

    {name:"Tanim",height:4,blood:"o+"}

]

const minHeight = arrayLikeObject.filter(Element => Element.height<5);

console.log("The lowest Height is:",minHeight);

