export interface IAuthCredentialsRequestDto{
  client_id: string;
  client_secret: string;
  audience: string;
  grant_type: string;
}

class AuthCredentialsRequestDto implements IAuthCredentialsRequestDto {
  
  public client_id: string;
  public client_secret: string;
  public audience: string;
  public grant_type: string;
 

  constructor(clientIdOrCredentials: string | IAuthCredentialsRequestDto, client_secret?: string, audience?: string,grant_type?: string) {
    if (typeof clientIdOrCredentials === 'string') {
      this.client_id = clientIdOrCredentials;
      this.client_secret = client_secret || '';
      this.audience = audience || "https://api.duniapay.net/";
      this.grant_type = grant_type || "client_credentials";
    } else {
      this.client_id = clientIdOrCredentials.client_id;
      this.client_secret = clientIdOrCredentials.client_secret || '';
      this.audience = clientIdOrCredentials.audience || "https://api.duniapay.net/";
      this.grant_type = clientIdOrCredentials.grant_type || "client_credentials";
     
    }
  }
}

export default AuthCredentialsRequestDto;


