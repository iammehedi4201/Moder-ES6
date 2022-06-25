function findMegaFriend(listOfName) {

  if (Array.isArray(listOfName) == false){

      return "Please Provide a Array Type Value"
    
  }

  let mega = listOfName[0];

  for(const name of listOfName)
  {

    if (name > mega) {

        mega = name;
        
       }

  }

  return mega;

   
    
    
}

const listOfName = ["Mehedi","Shaporan","Sakib","Evan"];

let result = findMegaFriend(listOfName);

console.log("The mega is:",result);