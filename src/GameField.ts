import {GameConfig} from "./Config";

export default class Gamefield {

    private canvas: HTMLCanvasElement;
    private context: any;
    private width = GameConfig.width * GameConfig.cellSize;
    private height = GameConfig.height * GameConfig.cellSize;

    constructor() {
        let canvas = document.getElementById('#game__canvas') as HTMLCanvasElement;
        let context = canvas.getContext('2d');
        this.canvas = canvas;
        this.context = context;
        this.drawField();
    }

    public drawField(): void {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
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
}