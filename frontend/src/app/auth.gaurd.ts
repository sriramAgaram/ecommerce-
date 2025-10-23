import { inject } from "@angular/core";
import { AuthService } from "./components/login/auth.service";
import { CanActivateFn, Router } from "@angular/router";


export const authGaurd: CanActivateFn = (route, state) => {
    const authservice = inject(AuthService);
    const router = inject(Router);

    // Ensure the name matches the service exactly!
    if (authservice.isLoggedin()) { // Must match!
        return true
    } else {
        router.navigate(['/login'])
        return false

    }
}