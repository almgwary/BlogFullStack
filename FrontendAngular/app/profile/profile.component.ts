import {Component} from 'angular2/core';
import {Post} from "../post/post.component";
import {PostService} from "../services/post.service"
 
@Component({
    selector:'profile',
    templateUrl:'app/profile/view/profile.view.html',
    styleUrls:['app/profile/style/profile.style.css'],
    directives:[Post],
    providers:[PostService]
})
export class ProfileComponent { 
  posts=[];
  errorMessage :any;
  userId = 1 ; 
  constructor(private postService:PostService){
     this.postService.getPosts(this.userId)
                   .subscribe(
                     posts => this.posts = posts,
                     error =>  this.errorMessage = <any>error);
  
  }

 toggelPostLike($event){
    // [$event.post] is revrence to Dom element
     console.log($event);
     if($event.post.isLike)$event.post.likeCount+=1;
     else $event.post.likeCount-=1;
 }

  
}