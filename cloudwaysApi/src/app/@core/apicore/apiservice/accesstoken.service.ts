/**
 * @copyright: ssdhero.com
 * @author: Jagath
**/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_CONSTANTS as urlc } from '../../../url.constants';
import { AccessTokenResponse } from '../apimodel/accesstoken.model';

@Injectable({
    providedIn: 'root'
})

export class AccessTokenService {
    constructor(private http: HttpClient) { }

    baseUrl: string = urlc.BASE_URL + urlc.GET_ACCESS_TOKEN_URL;

    getAccessToken(accessModel: any) {
        return this.http.post<AccessTokenResponse[]>(this.baseUrl, accessModel);
    }
}