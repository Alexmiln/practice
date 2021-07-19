import {Direction} from "./Config";
import Coordinate from "./Coordinate";

export default class Snake {
    private direction: Direction = Direction.Right;
    // private impossibleDirections = [
    //     {old: Direction.Left, new: Direction.Right},
    //     {old: Direction.Right, new: Direction.Left},
    //     {old: Direction.Up, new: Direction.Down},
    //     {old: Direction.Down, new: Direction.Up}
    // ];
    private position: Array<Coordinate>;

    constructor() {
        this.position = [
            new Coordinate(15, 15) as Coordinate,
            new Coordinate(14, 15) as Coordinate
        ];
    }

    // public setDirection(direction :Direction): void {
    //     if (this.checkImpossibleDirections(direction)) {
    //         this.direction = direction;
    //     }
    // }

    public setDirection(direction :Direction): void {
        this.direction = direction;
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

        let X = position.getX;
        let Y = position.getY;
        console.log("Координаты головы: ", X, Y);
        let EX = this.position[this.position.length - 1]?.getX
        let EY = this.position[this.position.length - 1]?.getX
        console.log("Координаты last: ", EX, EY);
        // console.log("Последний элемент до pop: ---> " + (this.position[this.position.length] as Coordinate));
        // this.position.pop;
        this.position.splice(this.position.length - 1, 1);
        console.log("Первый элемент: ---> " + (this.position[0] as Coordinate));
        console.log("Координаты 1 элемента: ---> " + this.position[0]?.getX, " : ", this.position[0]?.getY);
        console.log("Координаты последнего элемента: ---> " + this.position[this.position.length - 1]?.getX, " : ", this.position[this.position.length - 1]?.getY);
        console.log("Длина змеи: ---> " + (this.position.length));
    }

    // public grow() {

    // } 

    // private checkImpossibleDirections(direction: Direction): boolean {
    //     const result: Array<boolean> = this.impossibleDirections.map(impossibleDirection => {
    //         return impossibleDirection.new === direction && impossibleDirection.old === this.direction;
    //     });

    //     return result.every(value => value);
    // }
}
