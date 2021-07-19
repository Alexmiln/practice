import Coordinate from "./Coordinate";

export default class Apple {
    private position: Coordinate;

    constructor() {
        this.position = new Coordinate(17, 4);
    }

    public setPosition(position: Coordinate): void {
        this.position = position;
    }

    public getPosition(): Coordinate {
        return this.position;
    }
}