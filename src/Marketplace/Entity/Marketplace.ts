export default class Marketplace {
    private name: string;

    private constructor(name: string) {
        this.name = name;
    }

    public static create(name: string): Marketplace {
        return new Marketplace(name);
    }

    public getName(): string {
        return this.name;
    }
}
