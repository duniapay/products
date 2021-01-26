import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TransactionDTO } from 'src/core/transaction.dto';
import { IExportResponse } from './export.interfaces';
import { ITransaction } from './transactions.entity';
import { ITransactionDao } from './transactions.interfaces';

@Injectable()
export class TransactionsService implements ITransactionDao {
    private readonly cats: TransactionDTO[] = [];

    constructor(private configService: ConfigService) { }

    port(): string {
        return this.configService.get<string>('PORT');
    }

    async createExport(transaction: IExportResponse): Promise<void> {
        return null;
    }

    async export(exportId: String): Promise<IExportResponse[]> {
        return null;
    }

    async payout(transaction: ITransaction): Promise<void> {
        return null;
    }
    async update(transaction: ITransaction): Promise<void> {
        return null;
    }

    async collect(transaction: ITransaction): Promise<void> {
        return null;
    }

    async deposit(transaction: ITransaction): Promise<void> {
        return null;
    }

    async add(transaction: ITransaction): Promise<void> {
        return null;
    }

    async getAll(email: string): Promise<any> {
        return null;
    }
    async getOne(id: string): Promise<ITransaction> {
        return null;
    }
}
