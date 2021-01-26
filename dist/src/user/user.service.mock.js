"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceMock = void 0;
const user_entity_1 = require("./user.entity");
class UserServiceMock {
    async getOne(email) {
        let user = new user_entity_1.default('test@demo.com', 'serge wilfried', 'ouedraogo', 1, 5000, 550534, '+8733546822', {});
        if (email !== undefined && email !== '') {
            return Promise.resolve(user);
        }
        else {
            return Promise.reject({ 'message': 'invalid params' });
        }
    }
    async auth(credentials) {
        if (credentials.client_id !== undefined && credentials.client_secret !== '') {
            return Promise.resolve({ 'token': '' });
        }
        else {
            return Promise.reject({ 'message': 'invalid params' });
        }
    }
    async add(user) {
        if (user !== undefined) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    }
    async update(user) {
        if (user !== undefined) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    }
    async delete(id) {
        if (id !== undefined) {
            return Promise.resolve();
        }
        else {
            return Promise.reject();
        }
    }
}
exports.UserServiceMock = UserServiceMock;
//# sourceMappingURL=user.service.mock.js.map