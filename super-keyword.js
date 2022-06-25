class User {

    constructor(name,email,gender){

        this.FaceBookName =name;
        this.FaceBookEmail = email;
        this.gender = gender;
    }
    
    logIN(){

    }

    logOut(){

    }
}

const userOne = new User("Mehedi","Mehedi@gmail.com","Male");

const userTwo = new User("Mishu","Mishu@gmail.com","Female");

class Admin extends User{

  constructor(name,email,gender,phone){

    super(name,email,gender);

    this.phoneNo = phone;

  }

}

const admin = new Admin("Jhankar","Jhankar@gmail.com","Male","01775777038");

console.log("The Admin Details is:",admin);

class AdminUltaPlus extends Admin{

    constructor(name,email,gender,phone,home){
        
        super(name,email,gender,phone)

        this.home = home;

    }

}

const adminUltaPlus = new AdminUltaPlus("Goku","Goku@gmail.com","Male","01755702685","Galaxy-24");

console.log("The Admin Ulta Plus Details is:",adminUltaPlus);


