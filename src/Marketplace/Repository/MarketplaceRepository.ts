import MarketplaceRepositoryInterface from "./MarketplaceRepositoryInterface";
import Marketplace from "../Entity/Marketplace";
import MarketplaceCollection from "../Entity/MarketplaceCollection";
import AccountNo from "../Entity/AccountNo";
import MarketplaceConfigInterface from "../ConfigInterface";

export default class MarketplaceRepository implements MarketplaceRepositoryInterface {
    private config: MarketplaceConfigInterface;

    constructor(config: MarketplaceConfigInterface) {
        this.config = config;
    }

    findAllByAccountNumber(accountno: AccountNo): Promise<MarketplaceCollection> {
        // return fetch(this.config.list).then( r => {
        //     return MarketplaceCollection.fromArray([]);
        // });

        console.log(`Simulating XHR to '${this.config.list}'`);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(MarketplaceCollection.fromArray([
                    Marketplace.create('Market 1'),
                    Marketplace.create('Market 2'),
                ]));
            }, 1000);
        });
    }
}
