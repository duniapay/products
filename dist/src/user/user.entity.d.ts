export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    currency: {
        description: string;
        code: string;
        symbol: string;
        unit: string;
        divisibility: string;
    };
    account: number;
    available_balance: number;
    mobile: string;
    email: string;
}
declare class User implements IUser {
    id: number;
    first_name: string;
    last_name: string;
    currency: {
        description: string;
        code: string;
        symbol: string;
        unit: string;
        divisibility: string;
    };
    account: number;
    available_balance: number;
    mobile: string;
    email: string;
    constructor(emailOrUser: string | IUser, first_name?: string, last_name?: string, id?: number, available_balance?: number, account?: number, mobile?: string, currency?: any);
}
export default User;
