import MarketplaceService from './Service/MarketplaceService';
import MarketplaceRepository from './Repository/MarketplaceRepository';
import MarketplaceConfigInterface from "./ConfigInterface";
import MapperInterface from "./Mapper/MapperInterface";
import MarketplaceMapper from "./Mapper/MarketplaceMapper";

export default class DIContainer {

    private config: MarketplaceConfigInterface;

    private constructor(config: MarketplaceConfigInterface) {
        this.config = config;
    }

    public static createWithConfig(config: MarketplaceConfigInterface): DIContainer {
        return new DIContainer(config);
    }

    // /**
    //  * I would have to disable noImplicitAny because of this but possibly can be done with signatures
    //  * @param key
    //  */
    // public get(key: string): any {
    //
    //     const getter = `get${key.split('.').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')}`;
    //
    //     try {
    //         return this[getter]();
    //     } catch (err) {
    //         throw `Service '${key}' is not defined`;
    //     }
    // }

    public getMarketplaceService(): MarketplaceService {
        return new MarketplaceService(
            new MarketplaceRepository(this.config, this.getMarketplaceMapper())
        );
    }

    private getMarketplaceMapper(): MapperInterface {
        return new MarketplaceMapper();
    }
}
