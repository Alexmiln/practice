import {GameConfig} from "./Config";
import Coordinate from "./Coordinate";

export default class DrawProvider
{
    private readonly scoreBlock: HTMLElement = document.getElementById('score__count') as HTMLElement;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private width = GameConfig.width * GameConfig.cellSize;
    private height = GameConfig.height * GameConfig.cellSize;

    constructor()
    {
        this.canvas = document.getElementById('game__canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    public drawApple(applePosition: Coordinate): void {
        this.context.fillStyle = "#E80909";
        this.context.fillRect(
            applePosition.getX() * GameConfig.cellSize,
            applePosition.getY() * GameConfig.cellSize,
            GameConfig.cellSize,
            GameConfig.cellSize
        );
    }

    public drawSnake(snakePosition: Array<Coordinate>): void {
        this.context.fillStyle = '#8AA84A';

        snakePosition.map(position => {
            this.context.fillRect(
                position.getX() * GameConfig.cellSize,
                position.getY() * GameConfig.cellSize,
                GameConfig.cellSize,
                GameConfig.cellSize);

            this.context.fillStyle = "#AACF5B";
        });
    }

    public drawScore(score: number) {
        this.scoreBlock.innerHTML = '' + score;
    }

    public drawField(): void {
        this.context.fillStyle = "#E9CDC7";
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.fillStyle = "#F5D7D0";
        for (let i = 0; i < GameConfig.width; i += 2) {
            for (let j = 0; j < GameConfig.height; j += 2) {
                this.context.fillRect(
                    i * GameConfig.cellSize,
                    j * GameConfig.cellSize, 
                    GameConfig.cellSize, 
                    GameConfig.cellSize);
                this.context.fillRect(
                    (i + 1) * GameConfig.cellSize, 
                    (j + 1) * GameConfig.cellSize, 
                    GameConfig.cellSize, 
                    GameConfig.cellSize);
            }
        }
    }
}