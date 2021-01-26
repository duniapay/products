export interface IAuthCredentialsRequestDto {
    client_id: string;
    client_secret: string;
    audience: string;
    grant_type: string;
}
declare class AuthCredentialsRequestDto implements IAuthCredentialsRequestDto {
    client_id: string;
    client_secret: string;
    audience: string;
    grant_type: string;
    constructor(clientIdOrCredentials: string | IAuthCredentialsRequestDto, client_secret?: string, audience?: string, grant_type?: string);
}
export default AuthCredentialsRequestDto;
