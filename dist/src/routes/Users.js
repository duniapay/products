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
const UserDao_1 = __importDefault(require("@daos/User/UserDao"));
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const querystring = require('querystring');
const router = express_1.Router();
const userDao = new UserDao_1.default();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
var isAuthenticated = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-1f5g1j38.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://api.duniapay.net/',
    issuer: 'https://dev-1f5g1j38.eu.auth0.com/',
    algorithms: ['RS256']
});
/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const {client_id, client_secret} = req.body
    var parsed = querystring.parse(req.url);
    console.log(parsed);
    if (parsed['/?secret'] !== process.env.CUSTOMER_SECRET) {
        res.status(404).send({
            status: 'Unauthorized',
            message: "Missing or invalid API Key. Contact Support !"
        });
    }
    else {
        var client_secret = process.env.OAUTH_CLIENTSECRET;
        var client_id = process.env.OAUTH_CLIENTID;
        const token = yield userDao.auth({ client_id: client_id, client_secret: client_secret });
        return res.status(OK).json(token);
    }
}));
/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/
router.post('/', isAuthenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userDao.add(req.body);
    return res.status(OK).json({ user });
}));
/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/
router.get('/:userId', isAuthenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userDao.getOne(req.params.userId);
    return res.status(OK).json({ user });
}));
/******************************************************************************
 *                                     Export
 ******************************************************************************/
exports.default = router;
