import MarketplaceInterface from './MarketplaceInterface'

/** This would implement some iterator interface ... */
export default class MarketplaceCollection {
    private items: Array<MarketplaceInterface>;

    private constructor(marketplaces: MarketplaceInterface[]) {
        this.items = marketplaces;
    }

    static fromArray(marketplaces: MarketplaceInterface[]): MarketplaceCollection {
        return new MarketplaceCollection(marketplaces);
    }
}
