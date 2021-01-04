/* eslint-disable @typescript-eslint/no-misused-promises */
import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import UserDao from '@daos/User/UserDao';
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const querystring = require('querystring');

import { paramMissingError, IRequest } from '@shared/constants';



const router = Router();
const userDao = new UserDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


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

router.get('/', async (req: Request, res: Response) => {
 // const {client_id, client_secret} = req.body
  var parsed = querystring.parse(req.url)
  console.log(parsed)
  if (parsed['/?secret'] !== process.env.CUSTOMER_SECRET) {
      res.status(404).send({
          status: 'Unauthorized',
          message: "Missing or invalid API Key. Contact Support !"
      })
  }

  else {
    var client_secret = process.env.OAUTH_CLIENTSECRET;
    var client_id = process.env.OAUTH_CLIENTID;
    
    const token = await userDao.auth({client_id:client_id,client_secret:client_secret});
    return res.status(OK).json( token );
  }
});

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.post('/',isAuthenticated, async (req: Request, res: Response) => {
  const user = await userDao.add(req.body);
  return res.status(OK).json({ user });
});

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/:userId',isAuthenticated, async (req: Request, res: Response) => {

  const user = await userDao.getOne(req.params.userId);
  return res.status(OK).json({ user });
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
