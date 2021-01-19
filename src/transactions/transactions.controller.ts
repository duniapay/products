



import { UseInterceptors } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SentryInterceptor } from 'src/core/sentry.interceptor';
import { ITransaction } from 'src/transactions/transactions.entity';
import { IExportResponse } from './export.interfaces';
import { TransactionsService } from './transactions.service';



@UseInterceptors(SentryInterceptor)
@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}
  


  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getOne(@Param('id') id: string): Promise<ITransaction> {
    return this.transactionsService.getOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':email')
  async getAll(@Param('email') email: string): Promise<any> {
    return this.transactionsService.getAll(email);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async add(@Body() body: ITransaction): Promise<void> {
    this.transactionsService.add(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async collect(@Body() body: ITransaction): Promise<void> {
    this.transactionsService.collect(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async payout(@Body() body: ITransaction): Promise<void> {
    this.transactionsService.payout(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async update(@Body() body: ITransaction): Promise<void> {
    this.transactionsService.update(body);
  }


  /// Admin create transaction exports request
  @UseGuards(AuthGuard('jwt'))
  @Post('/exports')
  async createExport(@Body() body: IExportResponse): Promise<void> {
    this.transactionsService.createExport(body);
  }

  /// Admin Retrieve a transaction export.
  @UseGuards(AuthGuard('jwt'))
  @Get('exports/:exportId')
  async export(@Param(':exportId') exportId: string): Promise<void> {
    this.transactionsService.export(exportId);
  }
  

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async deposit(@Body() body: ITransaction): Promise<void> {
    this.transactionsService.deposit(body);
  }


}

