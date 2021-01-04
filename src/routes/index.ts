import { Router } from 'express';
import UserRouter from './Users';
import TransactionsRouter from './Transactions';
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
// Init router and path
const router = Router();




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
router.use('/users', UserRouter);
router.use('/transactions', isAuthenticated, TransactionsRouter);

// Export the base-router
export default router;
