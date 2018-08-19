import MarketplaceServiceInterface from "./MarketplaceServiceInterface";
import AccountNo from "../Entity/AccountNo";
import MarketplaceCollection from "../Entity/MarketplaceCollection";
import MarketplaceRepositoryInterface from "../Repository/MarketplaceRepositoryInterface";

export default class MarketplaceService implements MarketplaceServiceInterface {
    private repository: MarketplaceRepositoryInterface;

    public constructor(repository: MarketplaceRepositoryInterface) {
        this.repository = repository;
    }

    public findMarketplacesByAccountNumber(accountno: AccountNo): Promise<MarketplaceCollection> {
        return this.repository.findAllByAccountNumber(accountno);
    }
}
