import {Component} from 'angular2/core'
import {UserService} from "../services/user.service"
@Component({
    selector:'signup',
    templateUrl:'app/signup/view/signup.html',
    styleUrls:['app/signup/style/signup.css'],
     providers:[UserService]
    
})
export class Signup {
    avatars = [];
    constructor(private userService:UserService){
        // creat avatars urls
        for(var i=0;i<25;++i)
            this.avatars.push('resources/img/avatars/'+i.toString()+'.png');
    }
    user={
        email:"",
        password:"",
        name:"",
        avatar_url:""
    }
    
    signup(){
        console.log("signup:",this.user);
        this.userService.signUp(this.user)
        .subscribe(
            user => {
                console.log("succsfull signed up ",user);
            },
            error => {
                // handel error here
            }
        )
    }

}