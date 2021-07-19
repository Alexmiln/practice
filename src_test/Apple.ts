import {GameConfig} from "./Config";
import Coordinate from "./Coordinate";

export default class Apple {
    private position: Coordinate;

    constructor() {
        this.position = new Coordinate(16, 10);
    }

    public spawn(): Coordinate
    {
        this.position = new Coordinate(this.getRandomInt(GameConfig.width, GameConfig.height), this.getRandomInt(GameConfig.width, GameConfig.height));

        return this.position;
    }

    public getPosition(): Coordinate {
        return this.position;
    }

    private getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}