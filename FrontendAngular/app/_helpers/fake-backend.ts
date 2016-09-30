/**
 * The fake backend provider enables the example to run without a backend / backendless,
 * It uses the Angular 2 MockBackend to replace the default backend used by the Http service, 
 * the MockBackend enables you to intercept http requests made within the application 
 * and provide fake responses, it's also used for unit testing.
 */
import { MockBackend, MockConnection } from 'angular2/http/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from 'angular2/http';
import { Injectable }     from 'angular2/core'
@Injectable()
export class FakeBackendProvider  {

    // // FakeBackendProvider(private ){}
    // // use fake backend in place of Http service for backend-less development
    // provide: Http ;
     
    // useFactory: (backend:MockBackend, options:BaseRequestOptions) => {
    //     // configure fake backend
    //     backend.connections.subscribe((connection: MockConnection) => {
    //         let testUser = {    password: 'test', 
    //                             "id":"10",
    //                             "AuthToken":"ASDFSDFGBDFG5456345gfdge465345geger656hgfbsa3WEr34AWferg54wrgwegsdfGw5sDFGSDFGSsDFgwergsDFG",
    //                             "avatar_url":"resources/img/avatars/18.png",
    //                             "name":"Esmail Ahmed",
    //                             "email":"email@email.com"}

    //         // wrap in timeout to simulate server api call
    //         setTimeout(() => {

    //             // fake authenticate api end point
    //             if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
    //                 // get parameters from post request
    //                 let params = JSON.parse(connection.request.getBody());

    //                 // check user credentials and return fake jwt token if valid
    //                 if (params.email === testUser.email && params.password === testUser.password) {
    //                     connection.mockRespond(new Response(
    //                         new ResponseOptions({ status: 200, body: 
    //                             {"id":"10",
    //                             "AuthToken":"ASDFSDFGBDFG5456345gfdge465345geger656hgfbsa3WEr34AWferg54wrgwegsdfGw5sDFGSDFGSsDFgwergsDFG",
    //                             "avatar_url":"resources/img/avatars/18.png",
    //                             "name":"Esmail Ahmed",
    //                             "email":"email@email.com"}
    //                          })
    //                     ));
    //                 } else {
    //                     connection.mockRespond(new Response(
    //                         new ResponseOptions({ status: 401})
    //                     ));
    //                 }
    //             }

    //             // fake users api end point
    //             if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
    //                 // check for fake auth token in header and return test users if valid, this security is implemented server side
    //                 // in a real application
    //                 if (connection.request.headers.get('Authorization') === 'ASDFSDFGBDFG5456345gfdge465345geger656hgfbsa3WEr34AWferg54wrgwegsdfGw5sDFGSDFGSsDFgwergsDFG') {
    //                     connection.mockRespond(new Response(
    //                         new ResponseOptions({ status: 200, body: [testUser] })
    //                     ));
    //                 } else {
    //                     // return 401 not authorised if token is null or invalid
    //                     connection.mockRespond(new Response(
    //                         new ResponseOptions({ status: 401 })
    //                     ));
    //                 }
    //             }

    //         }, 500);

    //     });

    //     return new Http(backend, options);
    // };
    
};