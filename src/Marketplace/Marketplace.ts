import MarketplaceInterface from './MarketplaceInterface'

export default class Marketplace implements MarketplaceInterface {
    private name: string;

    private constructor(name: string) {
        this.name = name;
    }

    static create(name: string): Marketplace {
        return new Marketplace(name);
    }

    getName(): string {
        return this.name;
    }
}
