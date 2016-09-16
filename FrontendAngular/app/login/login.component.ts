import {Component} from 'angular2/core'
import {UserService} from "../services/user.service"
import {SharedService}from '../services/shared.service'
@Component({
    selector:'login',
    templateUrl:'app/login/view/login.html',
    styleUrls:['app/login/style/login.css'],
     providers:[UserService]
    
})
export class Login {
    constructor(private userService:UserService,private sharedService:SharedService){}
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
                this.sharedService.setActiveUser(user);
            },
            error => {
                // handel error here
            }
        )
    }

}