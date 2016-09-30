import { Injectable }     from 'angular2/core'
import { Http, Response } from 'angular2/http'
import { Observable }     from 'rxjs/Observable'
import {Subject}    from 'rxjs/Subject'
import {BehaviorSubject}    from 'rxjs/subject/BehaviorSubject'


@Injectable()
export class SharedService {

    // create BehaviorSubject  for each variable 
    // current logged in user opject
    public activeUser = new BehaviorSubject<Object>(null);
    public activeUserValue:Object ;
    // state of fab button [ home - profile]
    public fabState= new BehaviorSubject<string>('home');
    // post form content 
    public postFormContent= new BehaviorSubject<string>('');

    // create  Observables for each variable 
    public activeUserChange = this.activeUser.asObservable();
    public fabStateChange = this.fabState.asObservable();
    public postFormContentChange = this.postFormContent.asObservable();
 
    constructor(){
      
    }


    setActiveUser(activeUser:any) {
      console.log('almg shared service change activeUser',activeUser);
      this.activeUserValue = activeUser ;
      this.activeUser.next(activeUser);
      
    }
    setFabState(fabState:any) {
       console.log('almg shared service change fabState',fabState);
       this.fabState.next(fabState);
    }
    setPostFormContent(postFormContent:any) {
       console.log('almg shared service change postFormContent',postFormContent);
       this.postFormContent.next(postFormContent);
    }
    
}

 