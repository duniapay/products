import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TransactionDTO } from 'src/core/transaction.dto';
import { IExportResponse, IExportRequest } from './export.interfaces';
import { ITransaction } from './transactions.entity';
import { ITransactionDao } from './transactions.interfaces';
import { request } from 'gaxios'

@Injectable()
export class TransactionsService implements ITransactionDao {
    private readonly cats: TransactionDTO[] = [];

    constructor(private configService: ConfigService) { }

    port(): string {
        return this.configService.get<string>('PORT');
    }

    async createExport(transaction: IExportRequest): Promise<IExportResponse> {
        const { data } = await request({
            url: process.env.REHIVE_URL + '/3/admin/exports',
            headers: {
                Authorization: `Token ${process.env.REHIVE_TOKEN}`,
                'Content-Type': 'application/json'
            },
            data: transaction,
            method: 'POST'
        })

        return data
    }

    async export(exportId: string): Promise<IExportResponse> {
        const { data } = await request({
            url: process.env.REHIVE_URL + '/3/admin/exports/' + exportId,
            headers: {
                Authorization: `Token ${process.env.REHIVE_TOKEN}`,
                'Content-Type': 'application/json'
            },
        })

        return data
    }

    async payout(transaction: ITransaction): Promise<void> {
        console.log(transaction.amount)
        return null;
    }
    async update(transaction: ITransaction): Promise<void> {
        console.log(transaction.amount)

        return null;
    }

    async collect(transaction: ITransaction): Promise<void> {
        console.log(transaction.amount)
        return null;
    }

    async deposit(transaction: ITransaction): Promise<void> {
        console.log(transaction.amount)
        return null;
    }

    async add(transaction: ITransaction): Promise<void> {
        console.log(transaction.amount)

        return null;
    }

    async getAll(email: string): Promise<any> {
        console.log(email)

        return null;
    }
    async getOne(id: string): Promise<ITransaction> {
        console.log(id)
        return null;
    }
}
