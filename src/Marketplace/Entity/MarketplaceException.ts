export default class MarketplaceException extends Error {

    private static readonly NAME_WAS_EMPTY = 'Name was empty';

    public static emptyName(): MarketplaceException {
        return new MarketplaceException(
            this.NAME_WAS_EMPTY
        );
    }
}
