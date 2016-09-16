import {Component} from 'angular2/core'
import {UserService} from "../services/user.service"

@Component({
    selector:'login',
    templateUrl:'app/login/view/login.html',
    styleUrls:['app/login/style/login.css'],
     providers:[UserService]
    
})
export class Login {
    constructor(private userService:UserService){}
    user = {
        email:"",
        password:""
    }
    
    login(){
        console.log("Login:",this.user);
        this.userService.login(this.user)
        .subscribe(
            user => {
                console.log("succsfull logedin up ",user);
            },
            error => {
                // handel error here
            }
        )
    }

}