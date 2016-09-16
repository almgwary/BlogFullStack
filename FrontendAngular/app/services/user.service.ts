import { Injectable }     from 'angular2/core'
import { Http, Response } from 'angular2/http'
import { Observable }     from 'rxjs/Observable'
 


@Injectable()
export class UserService {

    constructor(private http: Http){}
    private signUpURL = "resources/mocks/loginSignUp.json";
    private loginURL = "resources/mocks/loginSignUp.json";
    private userProfileURL = "resources/mocks/user.json";
    private logoutURL = "resources/mocks/notyet.json";
    
    signUp(user) : Observable<Object[]>{
      // handel request here
      console.log("signUp user", user);
       // get profile posts by user id
      return this.http.get(this.signUpURL)
                    .map(this.extractData)
                    .catch(this.handleError);

    }

    login(user): Observable<Object[]>{
      // handel request here
      console.log("login user", user);
      return this.http.get(this.loginURL)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    getUserInformation(userId): Observable<Object[]>{
      // handel request here
      console.log("getUserInformation", userId);
      return this.http.get(this.userProfileURL)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    logout(user): Observable<Object[]>{
      // handel request here
      console.log("logout user", user);
      return this.http.get(this.logoutURL)
                    .map(this.extractData)
                    .catch(this.handleError);
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