/* eslint-disable @typescript-eslint/no-misused-promises */
import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import UsersDao from '@daos/User/UserDao.mock';
import TransactionsDao from '@daos/Transactions/TransactionsDao';
const querystring = require('querystring');

import { paramMissingError, IRequest } from '@shared/constants';
import { ITransaction } from '@entities/Transactions';

const router = Router();
const userDao = new UsersDao();
const transactionsDao = new TransactionsDao();

const { BAD_REQUEST, CREATED, OK } = StatusCodes;


/******************************************************************************
 *                      Get All transactions - "GET /api/users/all"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
    var parsed = querystring.parse(req.url)
    var email =parsed['/?client']
    if(email === undefined) {
      return res.status(BAD_REQUEST).json( 'Invalid user');
    } else {
    try {
        const transactions = await transactionsDao.getAll(email);
        if(transactions !== undefined) {
            return res.status(OK).json({ transactions });
        } else {
            return res.sendStatus(BAD_REQUEST);
        }
    } catch (error) {
        return res.status(BAD_REQUEST).json({error});
    }
}
});

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/status/:transactionId', async (req: Request, res: Response) => {
    console.log(req.params.transactionId)
    try {
        const users = await userDao.getOne(req.params.transactionId);
        return res.status(OK).json({ users });
    } catch (error) {
        return res.sendStatus(BAD_REQUEST);
    }
});

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.post('/collect', async (req: Request, res: Response) => {
    try {
        const payload: ITransaction = req.body;
        if(payload !== undefined) {
            const response = await transactionsDao.collect(payload);
            if(response !== undefined) {
              return res.status(OK).json({ response });
            } else {
               return res.sendStatus(BAD_REQUEST);
            }
        } else {
            return res.sendStatus(BAD_REQUEST);
        }
       
    } catch (error) {
        return res.sendStatus(BAD_REQUEST);
    }
});

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.post('/deposit', async (req: Request, res: Response) => {
    try {
        const payload: ITransaction = req.body;
        console.log(payload)
        if(payload.amount === undefined || payload.customerEmail === undefined) {
            return res.sendStatus(BAD_REQUEST);
        } 
            const response = await transactionsDao.deposit(payload);
            console.log('reponda');
            console.log(response);
            if(response !== undefined) {
              return res.status(OK).json({ response });
            } else {
                console.log('reponda');
               return res.sendStatus(BAD_REQUEST);
            }
    } catch (error) {
        console.log(error.message);

        return res.sendStatus(BAD_REQUEST);
    }
});

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.post('/payout', async (req: Request, res: Response) => {
    try {
        const payload: ITransaction = req.body;
        if(payload !== undefined) {
            const response = await transactionsDao.payout(payload);
            if(response !== undefined) {
              return res.status(OK).json({ response });
            } else {
                console.log('Response sent',payload)

               return res.sendStatus(BAD_REQUEST);
            }
        } else {
            console.log('payload sent',payload)
            return res.sendStatus(BAD_REQUEST);
        }
       
    } catch (error) {
        console.log(error)
        return res.sendStatus(BAD_REQUEST);
    }
});


export default router;