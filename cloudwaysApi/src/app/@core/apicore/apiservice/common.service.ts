/**
 * Created by:
 * Emp Code: D080
 * Emp Name: Jagath
 * Date Created: 16-Aug-2019
**/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_CONSTANTS as urlc } from '../../../url.constants';
import { ProvidersModel } from '../apimodel/common.model';
import { LinodePricingModel } from '../apimodel/linodelist.model';
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(private http: HttpClient) { }

    baseUrl: string = urlc.BASE_URL + urlc.PROVIDERS_LIST;
    public getProvidersList() {
        return this.http.get<ProvidersModel[]>(this.baseUrl)
    }
    public getLinodeServerList() {
        return this.http.get<LinodePricingModel[]>('https://api.linode.com/v4/linode/types')
    }
}