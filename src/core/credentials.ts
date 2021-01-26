

export interface IAuthCredentials{
    access_token: string;
    expires_in: number;
    token_type: string;
  }

  class AuthCredentials implements IAuthCredentials {
    public expires_in: number;
    public access_token: string;
    public token_type: string;
   
  
    constructor(tokenOrParams: string | IAuthCredentials,access_token?:string, token_type?: string, expires_in?: number) {
      if (typeof tokenOrParams === 'string') {
        this.access_token = access_token;
        this.expires_in = expires_in || 0;
        this.token_type = token_type || "none";
      } else {
        this.access_token = tokenOrParams.access_token;
        this.expires_in = tokenOrParams.expires_in;
        this.token_type = tokenOrParams.token_type || '';
      }
    }
  }

  
  export default AuthCredentials;