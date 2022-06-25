// class Person{

//     constructor(Name,height,gender,blood)
//     {
//         this.Name = Name;
//         this.height = height;
//         this.gender = gender;
//         this.blood =blood;
//     }

// }

// const personOne = new Person("Mehedi",6.00,"Male","A+");

// const personTwo = new Person("Shoaib",5.5,"Male","B+")

// console.log(personOne,personTwo);

class Student {

    constructor(Id,Name,Age,phone){
        
        this.Id =Id;
        this.Name = Name;
        this.Age = Age;
        this.phone =phone;
    }

    checkAge(){

        // if (this.Age > 18) {

        //     console.log(this.Name,"is a Adult boy");
            
        // }
        // else
        // {
        //     console.log(this.Name,"is a young boy");
        
        // }
        

    }
    megaNumber(){

        // const megaNumber =this.phone.filter(Element =>
        //     {
        //         if (Element.length >15) {

        //             return Element;
                    
        //         }
        //     })
        //  

        // const megaNumber = Math.max(...this.phone)
        // console.log("The megaNumber is:",megaNumber);

    }

}

const StudentOne = new Student("192-15-13298","Mehedi",17,["018186402009698999999","0015254564252","011014011212","0012121541154512"]);

const StudentTwo = new Student("192-15-13286","Shoaib",23,"01819435032");
// console.log(StudentOne );

// StudentOne.megaNumber();

StudentOne.checkAge();

// StudentTwo.checkAge();


class User{

    constructor(email,name){

        this.email = email;
        this.name =name;
        this.score = 0;

    }
    logIN(){

        console.log(this.email,"is just Log IN");

        return this;

    }
    logOut(){

        console.log(this.email,"is just Log Out");

        return this;

    }
    updateScore(){

        this.score++;

        console.log(this.email,"score is :",this.score);

        return this;
    }

}

const userOne = new User("iammehedi296@gmail.com","Mehedi Hasan");

const userTwo = new User("Goku4201@gmail.com","Goku");

userOne.logIN().updateScore().updateScore().updateScore().updateScore().logOut();





