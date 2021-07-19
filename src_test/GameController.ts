import Snake from "./Snake";
import Apple from "./Apple";
import {Direction, GameConfig} from "./Config";
import DrawProvider from "./DrawProvider";
import Coordinate from "./Coordinate";

export default class GameController {

    private apple: Apple;
    private snake: Snake;
    private drawProvider: DrawProvider;
    private score: number = 0;
    private gameIsOver: boolean = false;

    constructor() {
        this.apple = new Apple();
        this.snake = new Snake();
        this.drawProvider = new DrawProvider();

        this.draw();
    }

    public update(): void {
        this.updateGameState();
        this.draw();
    }

    public setSnakeDirection(direction :Direction): void {
        this.snake.setDirection(direction);
    }

    public isOver(): boolean {
        return this.gameIsOver;
    }

    private draw() {
        this.drawProvider.drawField();
        this.drawProvider.drawSnake(this.snake.getPosition());
        this.drawProvider.drawApple(this.apple.getPosition());
        this.drawProvider.drawScore(this.score);
    }

    private updateGameState() {
        if (Coordinate.checkCoordinates(this.snake.getNextHeadPosition(), this.apple.getPosition())) {
            //змейка скушает яблоко
            this.snake.move();
            // this.snake.grow();
            this.spawnApple();
            this.score++;
            return;
        }

        if (this.checkSnakeEqualToObject(this.snake.getNextHeadPosition())) {
            this.gameIsOver = true;
            return;
        }

        if (this.snake.getNextHeadPosition().getX() < 1 && this.snake.getNextHeadPosition().getX() > GameConfig.width &&
            this.snake.getNextHeadPosition().getY() < 1 && this.snake.getNextHeadPosition().getY() > GameConfig.height) {
            this.gameIsOver = true;
            return;
        }

        this.snake.move();
    }

    private spawnApple(): void {
        let applePosition: Coordinate;
        do {
           applePosition = this.apple.spawn();
        } while (this.checkSnakeEqualToObject(applePosition));
    }

    private checkSnakeEqualToObject(objectPosition: Coordinate): boolean {
        const result = this.snake.getPosition().map(position => {
            return Coordinate.checkCoordinates(position, objectPosition);
        });

        return result.every(value => value);
    }


}