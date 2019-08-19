/**
 * Created by:
 * Emp Code: D080
 * Emp Name: Jagath
 * Date Created: 06-July-2019
**/

import { Injectable } from '@angular/core';
import { AccessTokenResponse } from '../apimodel/accesstoken.model';
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {
  curDate: any = new Date();
  constructor() { }

  public login(accessTokenResponse: AccessTokenResponse) {
    localStorage.setItem('ACCESS_TOKEN', accessTokenResponse.access_token);
    localStorage.setItem('TOKEN_TYPE', accessTokenResponse.token_type);
    localStorage.setItem('EXPIRE', accessTokenResponse.expires_in.toString());
    localStorage.setItem('ACCESS_TIME', this.curDate.toLocaleString('utc'));
  }
  public isAuthorized() {
    let accessTime: any = new Date(localStorage.getItem('ACCESS_TIME'));
    let timeDiff = (this.curDate - accessTime) / 1000;
    if (timeDiff < 3600)
      return true;
    return false;
  }

  public logout() {
    localStorage.clear();
  }

  public getToken() {
    return localStorage.getItem('ACCESS_TOKEN');
  }
}
