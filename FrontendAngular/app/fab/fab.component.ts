import {Component} from 'angular2/core'

@Component({
    selector:'fab',
    templateUrl:'app/fab/view/fab.html',
    styleUrls:['app/fab/style/fab.css']
    
})
export class Fab {
    constructor(){}
    // [ logout - add-post - back]
    state="back";

    onClick(){
        console.log("fab:",this.state);
        if(this.state == 'logout') this.state = 'add-post';
        else  if(this.state == 'add-post') this.state = 'back';
        else this.state = 'logout';
    }

}