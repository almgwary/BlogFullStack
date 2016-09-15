import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector:'post-form',
    templateUrl:'app/postForm/view/postForm.view.html',
    styleUrls:['app/postForm/style/postForm.style.css']
})
export class PostForm {
   content = "";
}