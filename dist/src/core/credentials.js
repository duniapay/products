"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthCredentials {
    constructor(tokenOrParams, access_token, token_type, expires_in) {
        if (typeof tokenOrParams === 'string') {
            this.access_token = access_token;
            this.expires_in = expires_in || 0;
            this.token_type = token_type || "none";
        }
        else {
            this.access_token = tokenOrParams.access_token;
            this.expires_in = tokenOrParams.expires_in;
            this.token_type = tokenOrParams.token_type || '';
        }
    }
}
exports.default = AuthCredentials;
//# sourceMappingURL=credentials.js.map