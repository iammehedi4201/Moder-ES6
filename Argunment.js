function concatName(first,last) {

    console.log(arguments);

    let result = ''

    for(const name of arguments)
    {
        result = result +' '+ name;
    }

    console.log("The result is:",result);
    
}

concatName("Mehedi","hasan","tanim","Saif")

