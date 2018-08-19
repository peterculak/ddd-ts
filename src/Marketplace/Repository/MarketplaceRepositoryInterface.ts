import AccountNo from '../Entity/AccountNo';
import MarketplaceCollection from '../Entity/MarketplaceCollection';

export default interface MarketplaceRepositoryInterface {
    findAllByAccountNumber(accountno: AccountNo): Promise<MarketplaceCollection>;
}
