import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdministrateurService } from './services/shared/administrateur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private _administrateurService: AdministrateurService,
  private _router: Router) { }

  canActivate(): boolean{

    if(this._administrateurService.loggedIn()){
      return true
    }else {
      this._router.navigate(['login'])
      return false
    }
  }
}
