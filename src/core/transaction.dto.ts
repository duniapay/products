
import { IsNumberString, IsNotEmpty } from 'class-validator';


export class TransactionDTO {
    
    id: string | undefined;
    provider: string | undefined;
    otp: string | undefined;
        collection: string | undefined;
        @IsNotEmpty()
        tx_type: string;
        @IsNotEmpty()
        subtype: string | undefined;
        status: string | undefined;
        @IsNumberString()
        @IsNotEmpty()
        amount: number;

        currency: {
            code: string | undefined;
            description: string | undefined;
            symbol: string | undefined;
            unit: string | undefined;
            divisibility: number | undefined;
        }
        @IsNotEmpty()
        recipient: {
            id: string | undefined;
            first_name: string | undefined;
            last_name: string | undefined;
            email: string | undefined;
            username: string | undefined;
            mobile: string | undefined;
        }
}

/* INTOUCH STUFF */
export const INTOUCH_SERVICE = {
    ORANGE: {
        CASHIN: 'BF_PAIEMENTMARCHAND_OM',
        CASHOUT: 'BF_CASHIN_OM',
        AIRTIME: 'BF_AIRTIME_ORANGE',
        ORDER: ''
    },
    TELMOB: {
        CASHIN: 'BF_PAIEMENTMARCHAND_MOBICASH',
        CASHOUT: 'BF_CASHIN_MOBICASH',
        AIRTIME: 'BF_AIRTIME_TELMOB',
        ORDER: ''
    },
    TELECEL: {
        CASHIN: '',
        CASHOUT: '',
        AIRTIME: 'BF_AIRTIME_TELECEL',
        ORDER: ''
    },
    CORIS: {
        CASHIN: 'BF_PAIEMENTMARCHAND_CORIS',
        CASHOUT: 'BF_CASHIN_CORIS',
        AIRTIME: '',
        ORDER: ''
    },
    YUP: {
        CASHIN: 'BF_PAIEMENTMARCHAND_YUP',
        CASHOUT: 'BF_CASHIN_YUP',
        AIRTIME: '',
        ORDER: ''
    }

}

