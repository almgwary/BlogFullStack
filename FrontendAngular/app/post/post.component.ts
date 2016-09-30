/**
 * Post : jsut render post content and toggelLike of post
 */
import {Component,Input,Output,EventEmitter} from 'angular2/core'
import {CountAverage} from '../pipes/countAverage.pipe'
import {ROUTER_DIRECTIVES} from 'angular2/router'
@Component({
    selector:'post',
    templateUrl:'app/post/view/post.html',
    styleUrls:['app/post/style/post.css'],
    pipes:[CountAverage],
    directives:[ROUTER_DIRECTIVES]
    
})
export class Post {
    // input opject for this component
    @Input() post = null;
    // output event for this component
    @Output() likeAction = new EventEmitter();

    constructor(){}

    toggelLike(){
        this.post.isLike=!this.post.isLike;
        this.likeAction.emit({post : this.post});
    }

}