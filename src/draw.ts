// import {GameConfig} from "./Config";

// export default class Draw {

//     private canvas: HTMLCanvasElement;
//     private context: any;
//     private width = GameConfig.width * GameConfig.cellSize;
//     private height = GameConfig.height * GameConfig.cellSize;

//     constructor() {
//         let canvas = document.getElementById('#game__canvas') as HTMLCanvasElement;
//         let context = canvas.getContext('2d');
//         this.canvas = canvas;
//         this.context = context;
//         this.canvas.width = this.width;
//         this.canvas.height = this.height;
//         this.draw();
//     }

//     public draw() {
//         this.drawField();
//         this.drawApple();
//     }

//     public drawField(): void {
//         this.context.fillStyle = "#eeeed2";
//         this.context.fillRect(0, 0, this.width, this.height);
//         this.context.fillStyle = "#696";
//         for (let i = 0; i < GameConfig.width; i += 2) {
//             for (let j = 0; j < GameConfig.height; j += 2) {
//                 this.context.fillRect((i * GameConfig.cellSize),(j * GameConfig.cellSize), GameConfig.cellSize, GameConfig.cellSize);
//                 this.context.fillRect(((i+1) * GameConfig.cellSize),((j+1) * GameConfig.cellSize), GameConfig.cellSize, GameConfig.cellSize);
//             }
//         }
//     }

//     public drawApple(aX, aY): {

//         this.context.fillStyle = "red";
//         this.context.fillRect(this.aX * GameConfig.cellSize, this.aY * GameConfig.cellSize, 16, 16);
//         console.log(this.width, this.height, this.x * GameConfig.cellSize, this.y * GameConfig.cellSize);

// }
// }