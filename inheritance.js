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

};

class Admin extends User{

    delete(user){

       users = users.filter(Element =>{           //ekhane users array use hoise;

         if (Element.email != user.email ) {

            return Element;
            
         }

       })

    }
    

};


const userOne = new User("iammehedi296@gmail.com","Mehedi Hasan");

const userTwo = new User("Goku4201@gmail.com","Goku");

const userThree = new User("boku4201@gmail.com","boku");

const userFour = new User("dogu4201@gmail.com","Dogu");

const admin = new Admin("Vegita@58gmail.com","vegita");

let users = [userOne,userTwo,userThree,userFour];//class niche array create korle oita  ami class ar method ar modde use korte parbo;

admin.delete(userOne);

admin.logIN().updateScore().logOut();




