export declare class TransactionDTO {
    id: string | undefined;
    provider: string | undefined;
    otp: string | undefined;
    collection: string | undefined;
    tx_type: string;
    subtype: string | undefined;
    status: string | undefined;
    amount: number;
    currency: {
        code: string | undefined;
        description: string | undefined;
        symbol: string | undefined;
        unit: string | undefined;
        divisibility: number | undefined;
    };
    recipient: {
        id: string | undefined;
        first_name: string | undefined;
        last_name: string | undefined;
        email: string | undefined;
        username: string | undefined;
        mobile: string | undefined;
    };
}
export declare const INTOUCH_SERVICE: {
    ORANGE: {
        CASHIN: string;
        CASHOUT: string;
        AIRTIME: string;
        ORDER: string;
    };
    TELMOB: {
        CASHIN: string;
        CASHOUT: string;
        AIRTIME: string;
        ORDER: string;
    };
    TELECEL: {
        CASHIN: string;
        CASHOUT: string;
        AIRTIME: string;
        ORDER: string;
    };
    CORIS: {
        CASHIN: string;
        CASHOUT: string;
        AIRTIME: string;
        ORDER: string;
    };
    YUP: {
        CASHIN: string;
        CASHOUT: string;
        AIRTIME: string;
        ORDER: string;
    };
};
