import {Component} from 'angular2/core'
import {SharedService}from '../services/shared.service'
import {Router} from 'angular2/router'
@Component({
    selector:'fab',
    templateUrl:'app/fab/view/fab.html',
    styleUrls:['app/fab/style/fab.css']
    
})
export class Fab {
    constructor(private sharedService:SharedService,private router:Router){
         this.sharedService.fabState.subscribe(
            fabState => { 
                    if(fabState=='profile'){
                     this.state = 'back';                   
                    }else if (fabState=='home'){
                          this.state = 'logout'
                          /*
                           * check if postForm have text change state to this.state = 'add-post'
                           * **/
                   
                    }
                }
        )
        // change state of fab with post state
        this.sharedService.postFormContent.subscribe(
            postContent => {
                if(postContent && postContent.length > 0){
                    this.state = 'add-post'
                }else{
                    this.state = 'logout'
                }
            }
        )
    }
    // [ logout - add-post - back]
    state="back";

    onClick(){
        console.log("fab:",this.state);
        if(this.state == 'logout') {
            // handel log out action
            this.sharedService.setActiveUser(null);
        }
        else  if(this.state == 'add-post')  {
             // add post action
        }
        else   if(this.state == 'back') {
            this.router.navigate(['Home',{}]);
        }
    }

}