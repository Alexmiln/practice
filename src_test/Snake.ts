import {Direction} from "./Config";


export default class Snake {
    direction :Direction = Direction.Left;

    constructor() {

    }


    public getSnakeDirection(direction :Direction): void {
        this.direction = direction;
        console.log(this.direction + "- направление");
    }

}
