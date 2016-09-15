import {Component} from 'angular2/core'

@Component({
    selector:'signup',
    templateUrl:'app/signup/view/signup.html',
    styleUrls:['app/signup/style/signup.css']
    
})
export class Signup {
    avatars = [];
    constructor(){
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
    }

}