import {Component} from 'angular2/core';
import {HomeComponent} from '../home/home.component'
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
               <home> </home>
    `,
    directives:[HomeComponent]
})
export class AppComponent { }