import {Component} from 'angular2/core'

@Component({
    selector:'login',
    templateUrl:'app/login/view/login.html',
    styleUrls:['app/login/style/login.css']
    
})
export class Login {
    constructor(){}
    email="";
    password="";
    login(){
        console.log("Login:",this.email,this.password);
    }

}