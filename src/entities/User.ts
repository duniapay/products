export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  currency:{
    description: string;
    code: string;
    symbol: string;
    unit: string;
    divisibility: string;

  };
  account: number,
  available_balance: number;
  mobile: string,
  email: string;
}

class User implements IUser {
 
  public id: number;
  public first_name: string;
  public last_name: string;
  public currency:{
    description: string;
    code: string;
    symbol: string;
    unit: string;
    divisibility: string;

  };
  public account: number;
  public available_balance: number;
  public mobile: string;
  public email: string;

  constructor(emailOrUser: string | IUser, first_name?: string,last_name?: string,id?: number, available_balance?: number, account?: number, mobile?: string,currency?:any) {
    if (typeof emailOrUser === 'string') {
      this.email = emailOrUser;
      this.first_name = first_name || '';
      this.last_name = last_name || '';
      this.currency = currency || {
        description: "Western Africa CFA",
        code: "CFA",
        symbol: "XOF",
        unit: "CFA",
        divisibility: 5
    };
      this.available_balance = available_balance || 0;
      this.account = account || 0;
      this.mobile = mobile || '';
      this.id = id || 1;
    } else {
      this.email = emailOrUser.email;
      this.first_name = first_name || '';
      this.last_name = last_name || '';
      this.available_balance = available_balance || 0;
      this.currency = currency || {
        description: "Western Africa CFA",
        code: "CFA",
        symbol: "XOF",
        unit: "CFA",
        divisibility: 5
    };
      this.account = account || 0;
      this.mobile = mobile || '';
      this.id = id || 1;
    }
  }
}

export default User;
