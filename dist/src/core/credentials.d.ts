export interface IAuthCredentials {
    access_token: string;
    expires_in: number;
    token_type: string;
}
declare class AuthCredentials implements IAuthCredentials {
    expires_in: number;
    access_token: string;
    token_type: string;
    constructor(tokenOrParams: string | IAuthCredentials, access_token?: string, token_type?: string, expires_in?: number);
}
export default AuthCredentials;
