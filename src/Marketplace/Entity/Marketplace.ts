import MarketplaceException from "./MarketplaceException";

export default class Marketplace {
    private name: string;

    private constructor(name: string) {
        if ('' === name) {
            throw MarketplaceException.emptyName();
        }

        this.name = name;
    }

    public static create(data: { name: string }): Marketplace {
        return new Marketplace(
            data.name
        );
    }

    public getName(): string {
        return this.name;
    }
}
