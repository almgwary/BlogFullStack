import { Injectable }     from 'angular2/core'
import { Http, Response } from 'angular2/http'
import { Observable }     from 'rxjs/Observable'
 


@Injectable()
export class PostService {

    constructor(private http: Http){}
    private postsURL = "resources/mocks/posts.json";
    private userPostsURL = "resources/mocks/userposts.json";

    getPosts(userId): Observable<Object[]> {
    if(userId){
      // get profile posts by user id
      return this.http.get(this.userPostsURL)
                    .map(this.extractData)
                    .catch(this.handleError);

    }else{
    // get home page postes
    return this.http.get(this.postsURL)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
  }


  private extractData(res: Response) {
    let body = res.json();
    console.log("almg data recived:",body);
    return body || { };
  }

  private handleError (error: any) {
    console.log("almg data Error:",error);
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}