import Snake from "./Snake";
import Apple from "./Apple";
import {Direction, GameConfig} from "./Config";
import SupportFunctions from "./supportFunctions";
import DrawProvider from "./DrawProvider";
import Coordinate from "./Coordinate";

export default class GameController {

    private supportFunction: SupportFunctions;
    private apple: Apple;
    private snake: Snake;
    private drawProvider: DrawProvider;
    private score: number = 0;
    private gameIsOver: boolean = false;

    constructor() {
        this.supportFunction = new SupportFunctions();
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
        if (!this.gameIsOver) {
            this.checkEatApple()
            this.checkEatTail();
            this.checkEatWall()
    
            if (!this.gameIsOver) {this.snake.move();};
        }
    }

    private spawnApple(): void {
        let applePosition: Coordinate;
        do {
           applePosition = this.getNewApplePosition();
        } while (this.checkSnakeEqualToObject(applePosition));
        this.apple.setPosition(applePosition);
    }

    private checkSnakeEqualToObject(objectPosition: Coordinate): boolean {
        const result = this.snake.getPosition().map(position => {
            return Coordinate.checkCoordinates(position, objectPosition);
        });

        return result.every(value => value);
    }

    private getNewApplePosition(): Coordinate{
            let newPosition: Coordinate = new Coordinate(this.supportFunction.getRandomInt(0, GameConfig.width), this.supportFunction.getRandomInt(0, GameConfig.height));
    
            return newPosition;
    }

    private checkEatApple(): void {
        if (Coordinate.checkCoordinates(this.snake.getNextHeadPosition(), this.apple.getPosition())) {
            this.spawnApple();
            this.snake.move();
            this.snake.grow();
            this.score++;
            return;
        }
    }

    private checkEatTail(): void {
        let positionHead: Coordinate = this.snake.getNextHeadPosition()
        if (this.checkSnakeEqualToObject(positionHead)) {
            this.gameIsOver = true;
            return;
        }
    }

    private checkEatWall(): void {
        let positionHead: Coordinate = this.snake.getNextHeadPosition()
        if ((positionHead.getX() < 1 || positionHead.getX() > GameConfig.width) ||
            (positionHead.getY() < 1 || positionHead.getY() > GameConfig.height)) {
            this.gameIsOver = true;
            return;
        }
    }
}