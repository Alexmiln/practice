import GameController from "./GameController"
import {Direction} from "./Config";
export default class Game {
    private gameController :GameController;

    constructor() {
        this.initEventListeners();
        this.gameController = new GameController();
    }

    public start(): void {
        this.initGameLoop()
    }

    public stop() {
        this.gameIsOver = true;
    }

    private tick() {
        this.gameController.update();
    }

    private initGameLoop() {
        requestAnimationFrame(() => {
            if (!this.gameIsOver) {
                this.tick();
                this.initGameLoop();
            }
        })
    }

    private _processEvent(key: string) {
        switch(key) {
            case 'ArrowLeft':
                this.gameController.setSnakeDirection(Direction.Left);
                break;
            case 'ArrowUp':
                this.gameController.setSnakeDirection(Direction.Up)
                break;
            case 'ArrowRight':
                this.gameController.setSnakeDirection(Direction.Right)
                break;
            case 'ArrowDown':
                this.gameController.setSnakeDirection(Direction.Down)
                break;
            default:
                return;
        }
    }

    private initEventListeners() {
        console.log('init user input');
        document.addEventListener('keydown', (event) => {
            this._processEvent(event.key);
        })
    }
    
    private gameIsOver: boolean = false;   
}