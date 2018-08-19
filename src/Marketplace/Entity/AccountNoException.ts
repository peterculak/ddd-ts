export default class AccountNoException extends Error {

    private static readonly ACCOUNTNO_WAS_EMPTY = 'Account was empty';

    public static empty(): AccountNoException {
        return new AccountNoException(
            this.ACCOUNTNO_WAS_EMPTY
        );
    }
}
