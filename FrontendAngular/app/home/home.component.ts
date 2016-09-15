import {Component} from 'angular2/core';
import {Post} from "../post/post.component";
 
@Component({
    selector:'home',
    templateUrl:'app/home/view/home.view.html',
    styleUrls:['app/home/style/home.style.css'],
    directives:[Post]
})
export class HomeComponent { 

 toggelPostLike($event){
    // [$event.post] is revrence to Dom element
     console.log($event);
     if($event.post.isLike)$event.post.likeCount+=1;
     else $event.post.likeCount-=1;
 }

 posts =[
    {"id": "1",
      "time": 1231648787,
      "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa",
      "likeCount": 10,
      "isLike": true,
      "owner": {
        "id": "1",
        "name": "Avatar Lour",
        "email": "email@fci.com",
        "avatar_url": "resources/img/avatars/13.png"
      }
    },
    {"id": "1",
      "time": 1231648787,
      "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa",
      "likeCount": 1000,
      "isLike": false,
      "owner": {
        "id": "1",
        "name": "Avatar Lour",
        "email": "email@fci.com",
        "avatar_url": "resources/img/avatars/12.png"
      }
    },
    {"id": "1",
      "time": 1231648787,
      "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa",
      "likeCount": 0,
      "isLike": false,
      "owner": {
        "id": "1",
        "name": "Avatar Lour",
        "email": "email@fci.com",
        "avatar_url": "resources/img/avatars/18.png"
      }
    },
    {"id": "1",
      "time": 1231648787,
      "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa",
      "likeCount": 10,
      "isLike": true,
      "owner": {
        "id": "1",
        "name": "Avatar Lour",
        "email": "email@fci.com",
        "avatar_url": "resources/img/avatars/11.png"
      }
    },
    {"id": "1",
      "time": 1231648787,
      "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa",
      "likeCount": 10,
      "isLike": true,
      "owner": {
        "id": "1",
        "name": "Avatar Lour",
        "email": "email@fci.com",
        "avatar_url": "resources/img/avatars/18.png"
      }
    }
];
}