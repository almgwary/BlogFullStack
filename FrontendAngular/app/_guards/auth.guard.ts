/**
 * The auth guard is used to prevent unauthenticated users from accessing restricted routes, 
 * it's used in app.routing.ts to protect the home page route. 
 */
import { Injectable } from 'angular2/core';
import { Router, CanActivate } from 'angular2/router';

// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(private router: Router) { }

//     canActivate() {
//         if (localStorage.getItem('currentUser')) {
//             // logged in so return true
//             return true;
//         }

//         // not logged in so redirect to login page
//         this.router.navigate(['/login']);
//         return false;
//     }
// }