import {Component} from 'angular2/core';
import {Post} from "../post/post.component";
import {PostForm} from "../postForm/postForm.component"
import {PostService} from "../services/post.service"
 
@Component({
    selector:'home',
    templateUrl:'app/home/view/home.view.html',
    styleUrls:['app/home/style/home.style.css'],
    directives:[Post,PostForm],
    providers:[PostService]
})
export class HomeComponent { 
  posts=[];
  errorMessage :any;
  constructor(private postService:PostService){
     this.postService.getPosts(null)
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