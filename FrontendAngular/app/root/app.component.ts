import {Component} from 'angular2/core';
import {HomeComponent} from '../home/home.component';
import {Login} from '../login/login.component';
import {Signup} from '../signup/signup.component';
import {Fab} from '../fab/fab.component';

@Component({
    selector: 'my-app',
    templateUrl:'app/root/view/app.view.html',
    styleUrls:['app/root/style/app.styles.css'],
    directives:[HomeComponent,Login,Signup,Fab]
})
export class AppComponent { }