import {Direction} from "./Config";
import Coordinate from "./Coordinate";

export default class Snake {
    private direction: Direction = Direction.Right;
    private oldDirection: Direction = Direction.Right;
    private position: Array<Coordinate>;
    private lastElem: Array<Coordinate>;

    constructor() {
        this.position = [
            new Coordinate(15, 15) as Coordinate,
            new Coordinate(14, 15) as Coordinate,
            new Coordinate(13, 15) as Coordinate,
            new Coordinate(12, 15) as Coordinate,
            new Coordinate(11, 15) as Coordinate,
            new Coordinate(10, 15) as Coordinate,
            new Coordinate(9, 15) as Coordinate,
            new Coordinate(8, 15) as Coordinate,
            new Coordinate(7, 15) as Coordinate
        ];
        this.lastElem = [];
    }

    public setDirection(direction :Direction): void {
        if (this.checkImpossibleDirection(direction)) {
            this.direction = direction;
            this.oldDirection = this.direction;
        }
    }

    public getPosition(): Array<Coordinate> {
        return this.position;
    }

    public getNextHeadPosition(): Coordinate {
        return this.position[0] as Coordinate;
    }

    public move() {

        let position: Coordinate = this.position[0] as Coordinate
        if (this.direction == Direction.Left) {
            this.position.unshift(new Coordinate(position.getX() - 1, position.getY()))
        }

        if (this.direction == Direction.Right) {
            this.position.unshift(new Coordinate(position.getX() + 1, position.getY()))
        }

        if (this.direction == Direction.Up) {
            this.position.unshift(new Coordinate(position.getX(), position.getY() - 1))
        }

        if (this.direction == Direction.Down) {
            this.position.unshift(new Coordinate(position.getX(), position.getY() + 1))
        }
        this.lastElem = this.position.splice(this.position.length - 1, 1);
    }

    public grow() {
        this.position.push(this.lastElem[this.lastElem.length - 1] as Coordinate);
    } 

    private checkImpossibleDirection(direction: Direction): boolean{
        if ((this.oldDirection == Direction.Left && direction == Direction.Right) ||
            (this.oldDirection == Direction.Right && direction == Direction.Left) ||
            (this.oldDirection == Direction.Up && direction == Direction.Down) ||
            (this.oldDirection == Direction.Down && direction == Direction.Up)) {
            return false;
        } else {
            return true;
        }
    }

}
