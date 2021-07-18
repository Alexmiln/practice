// import DrawProvider from "./DrawProvider";
import Snake from "./Snake";
import Apple from "./Apple";
import {Direction} from "./Config";
import DrawProvider from "./DrawProvider";

export default class GameController {

    // direction :Direction;
    apple: Apple;
    snake: Snake;
    drawProvider :DrawProvider;

    constructor() {
        // this.direction = this.setSnakeDirection()
        this.apple = new Apple();
        this.snake = new Snake();
        this.drawProvider = new DrawProvider();
        // this.updateGameState();
    }

    public update(): void {
        this.updateGameState();
        this.draw();
    }

    public setSnakeDirection(direction :Direction) :void{
        this.snake.getSnakeDirection(direction);
    }

    private draw() {
        console.log('Draw');
        this.drawProvider.draw();
    }

    // private initSnake(dir :Direction) {
        
    // }

    private updateGameState() {
        // this.initSnake(this.direction)
        console.log('Update')
    }
}