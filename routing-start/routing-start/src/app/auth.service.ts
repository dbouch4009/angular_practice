import { resolveDirective } from "@angular/core/src/render3/instructions";

export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800)
            }
        );
        return promise;
    }

    login(){
        console.log('Logged in.');
        this.loggedIn = true;
    }

    logout(){
        console.log('Logged out.');
        this.loggedIn = false;
    }
}