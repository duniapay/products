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
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require('node-fetch');
class TransactionDao {
    /**
     * @param email
     */
    getOne(id) {
        // Obtain a document reference.
        var _payload;
        try {
        }
        catch (error) {
            _payload = error;
            return Promise.reject(_payload);
        }
        return Promise.resolve(_payload);
    }
    /**
     *
     */
    getAll(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var _payload;
            try {
                var q = email;
                // Fect data from rehive 
                var page = 0;
                var res = yield loadTransactions(q, page);
                //var { status,data } = res; 
                var all = [res];
                var blob = {
                    'status': res['status'],
                    'count': res['count'],
                    'next': res['data']['next'].replace(process.env.BACKEND_URL, 'https://api.duniapay.net/3/admin/'),
                    'previous': res['data']['previous'],
                    'results': res['data']['results']
                };
                return Promise.resolve(blob);
            }
            catch (error) {
                _payload = error;
                return Promise.reject(_payload);
            }
        });
    }
    /**
     *
     * @param transaction
     */
    add(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO
            return Promise.resolve(undefined);
        });
    }
    /**
     *
     * @param transaction
     */
    collect(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            var _payload;
            var c = { "transactions": [
                    { "tx_type": "debit",
                        "user": transaction.customerEmail,
                        "amount": transaction.amount,
                        "currency": transaction.currency,
                        "subtype": "merchant_payment",
                        "status": "Pending"
                    },
                    {
                        "tx_type": "credit",
                        "user": process.env.CUSTOMER_EMAIL,
                        "amount": transaction.amount,
                        "subtype": "customer_payment",
                        "currency": transaction.currency,
                    }
                ] };
            var parsedString = JSON.stringify(c);
            console.log(parsedString);
            try {
                yield fetch(process.env.BACKEND_TX_URL, { method: 'POST', headers: {
                        "Authorization": process.env.BACKEND_API
                    }, body: parsedString.toString() })
                    .then((json) => __awaiter(this, void 0, void 0, function* () {
                    _payload = json;
                }));
            }
            catch (error) {
                _payload = error;
            }
            return Promise.resolve(_payload);
        });
    }
    /**
     *
     * @param transaction
     */
    deposit(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            var _payload;
            var c = { "transactions": [
                    { "tx_type": "debit",
                        "user": process.env.CUSTOMER_EMAIL,
                        "amount": transaction.amount,
                        "currency": transaction.currency,
                        "subtype": "customer_withdraw"
                    },
                    {
                        "tx_type": "credit",
                        "user": transaction.customerEmail,
                        "amount": transaction.amount,
                        "subtype": "merchant_payment",
                        "status": 'Pending',
                        "currency": transaction.currency,
                    }
                ] };
            var parsedString = JSON.stringify(c);
            console.log(parsedString);
            try {
                yield fetch(process.env.BACKEND_TX_URL, { method: 'POST', headers: {
                        "Authorization": process.env.BACKEND_API
                    }, body: parsedString })
                    .then((json) => {
                    _payload = json;
                });
            }
            catch (error) {
                _payload = error;
            }
            return Promise.resolve(_payload);
        });
    }
    /**
   *
   * @param transaction
   */
    payout(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            var _payload;
            var c = {
                "user": process.env.CUSTOMER_EMAIL,
                "amount": transaction.amount,
                "currency": transaction.currency,
                "status": "Pending"
            };
            var parsedString = JSON.stringify(c);
            console.log(parsedString.toString());
            try {
                yield fetch(process.env.BACKEND_TX_URL + `/debit`, { method: 'POST', headers: {
                        "Authorization": process.env.BACKEND_API
                    }, body: parsedString })
                    .then((json) => {
                    _payload = json;
                    console.log(json);
                });
            }
            catch (error) {
                _payload = error;
                return Promise.reject(error);
            }
            return Promise.resolve(_payload);
        });
    }
    /**
     *
     * @param transaction
     */
    update(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            var _payload;
            try {
            }
            catch (error) {
                _payload = error;
            }
            return Promise.resolve(_payload);
        });
    }
}
function loadTransactions(user, page) {
    return new Promise(function (resolve, reject) {
        var url = process.env.BACKEND_TX_URL;
        if (page === 0) {
            url = url + '?user=' + user;
        }
        else {
            url = url + '?page=' + page + '&user=' + user;
        }
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
    });
}
exports.default = TransactionDao;
