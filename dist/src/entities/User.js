"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(emailOrUser, first_name, last_name, id, available_balance, account, mobile, currency) {
        if (typeof emailOrUser === 'string') {
            this.email = emailOrUser;
            this.first_name = first_name || '';
            this.last_name = last_name || '';
            this.currency = currency || {
                description: "Western Africa CFA",
                code: "CFA",
                symbol: "XOF",
                unit: "CFA",
                divisibility: 5
            };
            this.available_balance = available_balance || 0;
            this.account = account || 0;
            this.mobile = mobile || '';
            this.id = id || 1;
        }
        else {
            this.email = emailOrUser.email;
            this.first_name = first_name || '';
            this.last_name = last_name || '';
            this.available_balance = available_balance || 0;
            this.currency = currency || {
                description: "Western Africa CFA",
                code: "CFA",
                symbol: "XOF",
                unit: "CFA",
                divisibility: 5
            };
            this.account = account || 0;
            this.mobile = mobile || '';
            this.id = id || 1;
        }
    }
}
exports.default = User;
