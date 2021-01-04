"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const User_1 = __importDefault(require("@entities/User"));
require('dotenv').config();
const fetch = require('node-fetch');
class UserDao {
    getOne(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var q = email;
                // Fect data from rehive 
                var res = yield loadUser(q);
                //var { status,data } = res; 
                var _payload = res['data']['results'][0];
                let _user;
                if (email === process.env.CUSTOMER_EMAIL) {
                    _user = new User_1.default(_payload.email, _payload.first_name, _payload.last_name, _payload.id, _payload.available_balance, _payload.account, _payload.mobile);
                }
                else {
                    _user = new User_1.default(_payload.email, _payload.first_name, _payload.last_name, _payload.id, 0, _payload.account, _payload.mobile);
                }
                return Promise.resolve(_user);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve([]);
        });
    }
    add(user) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    auth(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonBody = { client_id: credentials.client_id, client_secret: credentials.client_secret, audience: process.env.OAUTH_AUDIENCE, grant_type: process.env.OAUTH_GRANT_TYPE };
            let requestConfig = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(jsonBody)
            };
            let response;
            yield fetch(process.env.OAUTH_ENDPOINT, requestConfig)
                .then((res) => res.json())
                .then((_json) => {
                response = _json;
            })
                .catch((err) => {
                throw err;
            });
            return response;
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('User not found');
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('User not found');
        });
    }
}
function loadUser(user) {
    return new Promise(function (resolve, reject) {
        var url = `https://api.rehive.com/3/admin/users/`;
        if (user !== undefined) {
            url = url + '?email=' + user;
            try {
                // Fect data from rehive 
                fetch(url, { method: 'GET', headers: {
                        "Authorization": process.env.BACKEND_API
                    }, })
                    .then((res) => res.json())
                    .then((blob) => {
                    // Store to firestore
                    resolve(blob);
                });
            }
            catch (error) {
                reject(error);
            }
        }
    });
}
exports.default = UserDao;
