/*
 * Login Page : just make simple login function
 * */
import {Component} from 'angular2/core'
import {UserService} from "../services/user.service"
import {SharedService}from '../services/shared.service'
import {ROUTER_DIRECTIVES} from 'angular2/router'
@Component({
    selector:'login',
    templateUrl:'app/login/view/login.html',
    styleUrls:['app/login/style/login.css'],
    providers:[UserService],
    directives:[ROUTER_DIRECTIVES]
    
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