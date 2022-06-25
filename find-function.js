const arrayLikeObject =[
    {name:"Mehedi",height:7,blood:"A+"},

    {name:"Shoaib",height:6,blood:"B+"},

    {name:"Tanim",height:4,blood:"o+"}

]

const findMinHeight = Element => Element.height >5 ;

const maxHeight = arrayLikeObject.find(findMinHeight);

console.log("The Max Height is:",maxHeight);


const listOfNames = ["Mehediee","Hasan","Tanimeeeeeeee","Sakibadaddadass"];

const megaName = Element =>
{
    return Element.length==-1;
}

let maxname = listOfNames[0];

const megafriend = listOfNames.find(megaName);

console.log("The mega friend is:",megafriend);