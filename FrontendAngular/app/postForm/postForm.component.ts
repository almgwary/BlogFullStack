import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {SharedService}from '../services/shared.service'

@Component({
    selector:'post-form',
    templateUrl:'app/postForm/view/postForm.view.html',
    styleUrls:['app/postForm/style/postForm.style.css']
})
export class PostForm {
   content = "";
   user:Object = null ;
   constructor(private sharedService:SharedService){
      this.user = this.sharedService.activeUserValue ;
       console.log('asdx',this.user);
       this.sharedService.activeUserChange.subscribe(
           activeUser => {
               this.user = activeUser;
               console.log('asdff',this.user);
            }
       )
      
   }
}