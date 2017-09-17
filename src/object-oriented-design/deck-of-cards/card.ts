export interface ICard {
    value: any;
    toString(): string;
}

export abstract class Card implements ICard {
    public value: any;

    constructor(value: any) {
        this.value = value;
    }

    public abstract toString(): string;
}
