import {Component} from 'angular2/core';
import {Post} from "../post/post.component";
import {PostService} from "../services/post.service"
import {UserService} from "../services/user.service"
 
@Component({
    selector:'profile',
    templateUrl:'app/profile/view/profile.view.html',
    styleUrls:['app/profile/style/profile.style.css'],
    directives:[Post],
    providers:[PostService,UserService]
})
export class ProfileComponent { 
  posts=[];
  errorMessage :any;
  userId = 1 ; 
  user= null ;
  constructor(private postService:PostService, private userService:UserService){
     this.userService.getUserInformation(this.userId)
                    .subscribe(
                        user => this.user = user ,
                        error => this.errorMessage = error 
                    );
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