"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = __importDefault(require("./Users"));
const Transactions_1 = __importDefault(require("./Transactions"));
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
// Init router and path
const router = express_1.Router();
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
// Add sub-routes
router.use('/users', Users_1.default);
router.use('/transactions', isAuthenticated, Transactions_1.default);
// Export the base-router
exports.default = router;
