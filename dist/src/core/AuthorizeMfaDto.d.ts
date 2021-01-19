export interface AuthorizeMfaDto {
    number: string;
    code: string;
    name: string | undefined;
    length: string | undefined;
    sid: string | undefined;
    service_sid: string | undefined;
    account_sid: string | undefined;
    to: string | undefined;
    channel: string | undefined;
    status: string | undefined;
    valid: boolean | undefined;
    amount: number | undefined;
    payee: any;
    date_created: string | undefined;
    date_updated: string | undefined;
}
export declare enum IntouchTransactionStatus {
    FAILED = "FAILED",
    PENDING = "PENDING",
    SUCCESSFUL = "SUCCESSFUL",
    INITIATED = "INITIATED"
}
