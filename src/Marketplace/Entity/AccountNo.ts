export default class AccountNo {
    private accountno: string;

    private constructor(accountno: string) {

        if ('' === accountno) {
            throw 'Account number can not be empty';
        }

        this.accountno = accountno;
    }

    public static create(accountno: string): AccountNo {
        return new AccountNo(accountno);
    }

    public getAccountNo(): string {
        return this.accountno;
    }
}
