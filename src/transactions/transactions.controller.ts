



import { Query, UseInterceptors } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SentryInterceptor } from 'src/core/sentry.interceptor';
import { ITransaction } from 'src/transactions/transactions.entity';
import { IExportResponse, IExportRequest } from './export.interfaces';
import { TransactionsService } from './transactions.service';
import { Response } from 'express';



@UseInterceptors(SentryInterceptor)
@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}
  


  // @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getOne(@Param('id') id: string,@Res() res: Response): Promise<ITransaction> {
    return this.transactionsService.getOne(id);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll(@Query('client') client: string,@Res() res: Response): Promise<any> {
    return this.transactionsService.getAll(client);
  }


  // @UseGuards(AuthGuard('jwt'))
  @Post('collect')
  async collect(@Body() body: ITransaction,@Res() res: Response): Promise<void> {
    this.transactionsService.collect(body);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post('payout')
  async payout(@Body() body: ITransaction,@Res() res: Response): Promise<void> {
    try {
      let rest = await this.transactionsService.payout(body);
      res.status(HttpStatus.OK).send(rest);
     } catch (error) {
       console.log(error.response.data)
       res.status(HttpStatus.BAD_REQUEST).send();
     }
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post()
  async update(@Body() body: ITransaction,@Res() res: Response): Promise<void> {
    try {
      let rest = await this.transactionsService.update(body);
      res.status(HttpStatus.OK).send(rest);
     } catch (error) {
       console.log(error.response.data)
       res.status(HttpStatus.BAD_REQUEST).send();
     }
  }


  /// Admin create transaction exports request
  // @UseGuards(AuthGuard('jwt'))
  @Post('exports')
  async createExport(@Body() body: IExportRequest, @Res() res: Response) {
    const exports = await this.transactionsService.createExport(body);
    return res.status(HttpStatus.ACCEPTED).json(exports)

  }

  /// Admin Retrieve a transaction export.
  // @UseGuards(AuthGuard('jwt'))
  @Get('exports/:exportId')
  async export(@Param('exportId') exportId: string, @Res() res: Response) {
    const exports = await this.transactionsService.export(exportId);
    return res.status(HttpStatus.ACCEPTED).json(exports)
  }
  

  // @UseGuards(AuthGuard('jwt'))
  @Post('deposit')
  async deposit(@Body() body: ITransaction,@Res() res: Response): Promise<void> {

    try {
      let rest = await this.transactionsService.deposit(body);
      res.status(HttpStatus.OK).send(rest);
     } catch (error) {
       res.status(HttpStatus.BAD_REQUEST).send(error.response.data);
     }
  }


}

