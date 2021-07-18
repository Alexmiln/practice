import {GameConfig} from "./Config";

export default class Apple {
    appleCord = {
        x: 0,
        y: 0
    }

    constructor() {
        this.getPosition();
    }

    private getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    public getPosition() {
        this.appleCord.x = this.getRandomInt(0, GameConfig.width);
        this.appleCord.y = this.getRandomInt(0, GameConfig.height);
    }
}