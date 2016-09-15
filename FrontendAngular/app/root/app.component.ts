import {Component} from 'angular2/core';
import {HomeComponent} from '../home/home.component'
@Component({
    selector: 'my-app',
    templateUrl:'app/root/view/app.view.html',
    styleUrls:['app/root/style/app.styles.css'],
    directives:[HomeComponent]
})
export class AppComponent { }