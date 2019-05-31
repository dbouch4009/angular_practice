import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable() // to inject auth service
export class AuthGuardService implements CanActivate, CanActivateChild {

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if(authenticated) {
                        return true;
                    } else{
                        this.router.navigate(['/']);
                    }
                }
            )    
    }

    //able to use different hook in routes
    canActivateChild(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            return this.canActivate(route,state);
        }

    constructor(private authService: AuthService, private router: Router){

    }
}