import { ConfigService } from '@nestjs/config/dist/config.service';
export declare class AppService {
    private configService;
    private client;
    constructor(configService: ConfigService);
    port(): string;
}
