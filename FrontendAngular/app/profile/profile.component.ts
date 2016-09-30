/**
 * Profile : change fab state and get posts
 */
import {Component} from 'angular2/core';
import {Post} from "../post/post.component";
import {PostService} from "../services/post.service"
import {UserService} from "../services/user.service"
import {RouteParams } from 'angular2/router';
import {SharedService}from '../services/shared.service'
 
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
  userId : string ; 
  user= null ;
  constructor(private postService:PostService, private userService:UserService, private params: RouteParams,private sharedService:SharedService){
    this.userId = params.get("id");
    if ( this.userId){
        // handel  another user actions
    }else {
        // handel this active user actions
    }
     this.sharedService.setFabState('profile');
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