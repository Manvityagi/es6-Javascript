class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    register(){
        console.log(`Congrats! ${this.username} , You are registered as user.`);  
    }

    //use of static functions
    static countusers(){
        console.log('There are 50 users');
    }
}

let manvi = new User('manvi', 'manvityagi770@gmail.com', '12345')
manvi.register();

//calling a static function
User.countusers();


//INHERITANCE
class member extends User{
    constructor(username,email,password,mempackage){
        super(username,email,password);
        this.package = mempackage;
    }

    getPackage()
    {
        console.log(`${this.username} has been registered in ${this.package}`)
    }
}

let Suraj = new member('Suraj','suraj11@gnail.com','897','Standard');
Suraj.register();
Suraj.getPackage();