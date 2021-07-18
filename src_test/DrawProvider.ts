import {GameConfig} from "./Config";

export default class DrawProvider {

    private canvas: HTMLCanvasElement;
    private context: any;
    private width = GameConfig.width * GameConfig.cellSize;
    private height = GameConfig.height * GameConfig.cellSize;

    constructor() {
        let canvas = document.getElementById('#game__canvas') as HTMLCanvasElement;
        let context = canvas.getContext('2d');
        this.canvas = canvas;
        this.context = context;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.draw();
    }

    public draw() {
        this.drawField();
        // this.drawApple(this.applePosition);
        // this.drawSnake(this.snakePosition);
    }

    private drawField(): void {
        this.context.fillStyle = "#eeeed2";
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.fillStyle = "#696";
        for (let i = 0; i < GameConfig.width; i += 2) {
            for (let j = 0; j < GameConfig.height; j += 2) {
                this.context.fillRect((i * GameConfig.cellSize),(j * GameConfig.cellSize), GameConfig.cellSize, GameConfig.cellSize);
                this.context.fillRect(((i+1) * GameConfig.cellSize),((j+1) * GameConfig.cellSize), GameConfig.cellSize, GameConfig.cellSize);
            }
        }
    }

    // private drawApple(applePosition) :void { //this.applePosition временно, для теста
        
    //     this.context.fillStyle = "red";
    //     this.context.fillRect(applePosition.x * GameConfig.cellSize, applePosition.y * GameConfig.cellSize, GameConfig.cellSize, GameConfig.cellSize);
    // }

    // private drawSnake(snakePosition) :void { //this.snakePosition временно
    //     for (let i = 0; i < snakePosition.length; i++) {
    //         this.context.fillStyle = (i == 0) ? "#282825" : "#2e2d2a";
    //         this.context.fillRect(snakePosition[i].x * GameConfig.cellSize, snakePosition[i].y * GameConfig.cellSize, GameConfig.cellSize, GameConfig.cellSize);
    //     }  
    // }
}