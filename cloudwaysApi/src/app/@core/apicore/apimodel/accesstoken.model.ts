/**
 * @copyright: ssdhero.com
 * @author: Jagath
**/

import { URL_CONSTANTS as urlc } from '../../../url.constants';
export class AccessToken {
    email: string = urlc.SECURE_API_EMAIL;
    api_key: string = urlc.SECURE_API_KEY;
}
export class AccessTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number
}