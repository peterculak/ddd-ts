import AccountNo from '../Entity/AccountNo'
import MarketplaceCollection from '../Entity/MarketplaceCollection'

export default interface MarketplaceServiceInterface {
    findMarketplacesByAccountNumber(accountno: AccountNo): Promise<MarketplaceCollection>;
}
