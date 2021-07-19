import GameController from "./GameController"
import {Direction, GameConfig} from "./Config";
export default class Game {
    private gameController :GameController;
    private gameIsOver: boolean;
    private frame: number = 0;
    private frameMax: number = GameConfig.frameMax;

    constructor() {
        this.initEventListeners();
        this.gameController = new GameController();
        this.gameIsOver = this.gameController.isOver();
        this.initGameLoop = this.initGameLoop.bind(this);
    }

    public start(): void {
        this.initGameLoop()
    }

    public stop() {
        this.gameIsOver = true;
        this.clearEventListeners();
    }

    private tick() {
        this.gameController.update();
    }

    private initGameLoop() {
        requestAnimationFrame(() => {
            if (!this.gameIsOver) {
                if ((++this.frame >= this.frameMax)) {
                    this.tick();
                    this.frame = 0;
                }
                this.initGameLoop();
            }
        })
    }

    private processEvent(key: string) {
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
        document.addEventListener('keydown', (event) => {
            this.processEvent(event.key);
        })
    }

    private clearEventListeners() {
        window.removeEventListener('keydown', (event) => {
            this.processEvent(event.key);
        })
    }

    
    
}