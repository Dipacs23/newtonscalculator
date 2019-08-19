import { Component, OnInit } from '@angular/core';
import { AccessTokenService } from '../@core/apicore/apiservice/accesstoken.service';
import { AccessToken, AccessTokenResponse } from '../@core/apicore/apimodel/accesstoken.model';
import { URL_CONSTANTS as urlc } from '../url.constants';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthgaurdService } from '../@core/apicore/gaurds/authgaurd.service';
import { CommonService } from '../@core/apicore/apiservice/common.service';
import { ProvidersModel } from '../@core/apicore/apimodel/common.model';
import { LinodePricingModel } from '../@core/apicore/apimodel/linodelist.model';
@Component({
  selector: 'app-accesstoken',
  templateUrl: './accesstoken.component.html',
  styleUrls: ['./accesstoken.component.css']
})
export class AccesstokenComponent implements OnInit {

  accessTokenForm: FormGroup;
  accessTokenResponse: AccessTokenResponse;
  providersModel: ProvidersModel;
  linodePricingModel: LinodePricingModel[];
  constructor(private accessTokenService: AccessTokenService,
    private authgaurdService: AuthgaurdService,
    private commonService: CommonService,
    private fb: FormBuilder) { }

  ngOnInit() {
    let isAuthorized = this.authgaurdService.isAuthorized();

    if (!isAuthorized) {
      this.accessTokenForm = this.fb.group({
        email: [urlc.SECURE_API_EMAIL],
        api_key: [urlc.SECURE_API_KEY]
      });
      this.accessTokenService.getAccessToken(this.accessTokenForm.value).subscribe((data: any) => {
        this.accessTokenResponse = data;
        this.authgaurdService.login(this.accessTokenResponse);
      });
    }

    this.commonService.getProvidersList().subscribe((data: any) => {
      this.providersModel = data.providers;
    });

    this.commonService.getLinodeServerList().subscribe((data: any) => {
      debugger;
      this.linodePricingModel = data.data;
    });

  }

}
