import {Component} from 'angular2/core'

@Component({
    selector:'signup',
    templateUrl:'app/signup/view/signup.html',
    styleUrls:['app/signup/style/signup.css']
    
})
export class Signup {
    constructor(){}
    user={
        email:"",
        password:"",
        name:"",
        avatar_url:""
    }
    
    signup(){
        console.log("signup:",this.user);
    }

}