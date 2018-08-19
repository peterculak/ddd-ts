import Marketplace from './Marketplace';

export default class MarketplaceCollection implements Iterator<Marketplace> {
    private marketplaces: Array<Marketplace>;

    private index: number = 0;

    constructor(marketplaces: Marketplace[]) {
        this.marketplaces = marketplaces;
    }

    static fromArray(marketplaces: Marketplace[]): MarketplaceCollection {
        return new MarketplaceCollection(marketplaces);
    }

    next(value?: any): IteratorResult<Marketplace> {
        return {
            done: this.index >= this.marketplaces.length,
            value: this.marketplaces[this.index++]
        };
    }
}
