// // const person ={

// //     name:"mehedi",
// //     gender:"male",
// //     study()
// //     {
// //         console.log(this);
// //     },
// //     sleep()
// //     {
// //         console.log("Go to sleep");
// //     }

// // };

// // person.eat = function() {

// //     console.log(this);
// // }

// // console.log(person);

// // person.eat();


// // function checkObject() {

// //     console.log(this);
    
// // }

// // checkObject();

//constructors

// function Person (name,gender,blood,height)
// {
//     this.name = name,
//     this.gender = gender,
//     this.blood =blood,
//     this.height = height;
//     console.log(this);
   
// }

// const  personOne = new Person("mehedi","Male"); //new create empty object {}; constructor this e empty object ta ke point kore

// const personTwo = new Person("Tanim","male");



// const person ={

//         name:"mehedi",
//         gender:"male",
//         height :[10,20,30,40,50],
//         study()
//         {
//             this.height.forEach(function(element) {

//                 console.log(this.name,element);
                
//             },this);
//         },
       
    
//     };

   

// person.study();


//another version of arraw function


const person ={

    name:"mehedi",
    gender:"male",
    height :[10,20,30,40,50],
    study()
    {
        this.height.forEach((element) => {

            console.log(this.name,element);
            
        });
    },
   

};

person.study()


