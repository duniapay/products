"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthCredentialsRequestDto {
    constructor(clientIdOrCredentials, client_secret, audience, grant_type) {
        if (typeof clientIdOrCredentials === 'string') {
            this.client_id = clientIdOrCredentials;
            this.client_secret = client_secret || '';
            this.audience = audience || "https://api.duniapay.net/";
            this.grant_type = grant_type || "client_credentials";
        }
        else {
            this.client_id = clientIdOrCredentials.client_id;
            this.client_secret = clientIdOrCredentials.client_secret || '';
            this.audience = clientIdOrCredentials.audience || "https://api.duniapay.net/";
            this.grant_type = clientIdOrCredentials.grant_type || "client_credentials";
        }
    }
}
exports.default = AuthCredentialsRequestDto;
//# sourceMappingURL=credentials_request.dto.js.map