import MarketplaceRepositoryInterface from "./MarketplaceRepositoryInterface";
import Marketplace from "../Entity/Marketplace";
import MarketplaceCollection from "../Entity/MarketplaceCollection";
import AccountNo from "../Entity/AccountNo";
import MarketplaceConfigInterface from "../ConfigInterface";
import MapperInterface from "../Mapper/MapperInterface";

export default class MarketplaceRepository implements MarketplaceRepositoryInterface {
    private config: MarketplaceConfigInterface;
    private mapper: MapperInterface;

    //dummy api json response
    private marketplaces: string = '[{"aws_marketplace_name":"Market1"},{"aws_marketplace_name":"Market2"}]';

    public constructor(config: MarketplaceConfigInterface, mapper: MapperInterface) {
        this.config = config;
        this.mapper = mapper;
    }

    public findAllByAccountNumber(accountno: AccountNo): Promise<MarketplaceCollection> {
        // return fetch(this.config.list).then( r => {
        //     return MarketplaceCollection.fromArray([]);
        // });

        console.log(`Simulating XHR to '${this.config.list}'`);

        return new Promise(resolve => {
            setTimeout(() => {
                const response = JSON.parse(this.marketplaces);
                const mapped = response.map((item: object) => {
                    return Marketplace.create(this.mapper.map(item));
                });
                resolve(MarketplaceCollection.fromArray(mapped));
            }, 1000);
        });
    }
}
