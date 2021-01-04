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
/* eslint-disable @typescript-eslint/no-misused-promises */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const UserDao_mock_1 = __importDefault(require("@daos/User/UserDao.mock"));
const TransactionsDao_1 = __importDefault(require("@daos/Transactions/TransactionsDao"));
const querystring = require('querystring');
const router = express_1.Router();
const userDao = new UserDao_mock_1.default();
const transactionsDao = new TransactionsDao_1.default();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
/******************************************************************************
 *                      Get All transactions - "GET /api/users/all"
 ******************************************************************************/
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var parsed = querystring.parse(req.url);
    var email = parsed['/?client'];
    if (email === undefined) {
        return res.status(BAD_REQUEST).json('Invalid user');
    }
    else {
        try {
            const transactions = yield transactionsDao.getAll(email);
            if (transactions !== undefined) {
                return res.status(OK).json({ transactions });
            }
            else {
                return res.sendStatus(BAD_REQUEST);
            }
        }
        catch (error) {
            return res.status(BAD_REQUEST).json({ error });
        }
    }
}));
/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/
router.get('/status/:transactionId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.transactionId);
    try {
        const users = yield userDao.getOne(req.params.transactionId);
        return res.status(OK).json({ users });
    }
    catch (error) {
        return res.sendStatus(BAD_REQUEST);
    }
}));
/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/
router.post('/collect', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        if (payload !== undefined) {
            const response = yield transactionsDao.collect(payload);
            if (response !== undefined) {
                return res.status(OK).json({ response });
            }
            else {
                return res.sendStatus(BAD_REQUEST);
            }
        }
        else {
            return res.sendStatus(BAD_REQUEST);
        }
    }
    catch (error) {
        return res.sendStatus(BAD_REQUEST);
    }
}));
/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/
router.post('/deposit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        console.log(payload);
        if (payload.amount === undefined || payload.customerEmail === undefined) {
            return res.sendStatus(BAD_REQUEST);
        }
        const response = yield transactionsDao.deposit(payload);
        console.log('reponda');
        console.log(response);
        if (response !== undefined) {
            return res.status(OK).json({ response });
        }
        else {
            console.log('reponda');
            return res.sendStatus(BAD_REQUEST);
        }
    }
    catch (error) {
        console.log(error.message);
        return res.sendStatus(BAD_REQUEST);
    }
}));
/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/
router.post('/payout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        if (payload !== undefined) {
            const response = yield transactionsDao.payout(payload);
            if (response !== undefined) {
                return res.status(OK).json({ response });
            }
            else {
                console.log('Response sent', payload);
                return res.sendStatus(BAD_REQUEST);
            }
        }
        else {
            console.log('payload sent', payload);
            return res.sendStatus(BAD_REQUEST);
        }
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(BAD_REQUEST);
    }
}));
exports.default = router;
