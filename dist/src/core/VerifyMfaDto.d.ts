export interface VerifyMfaDto {
    number: string;
    name: string;
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
    lookup: {
        carrier: {
            error_code: any;
            name: string | undefined;
            mobile_country_code: string | undefined;
            mobile_network_code: string | undefined;
            type: string | undefined;
        };
    };
    send_code_attempts: [];
    url: string | undefined;
}
