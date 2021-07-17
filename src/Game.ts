// import Snake from "./Snake";
// import Apple from "./Apple";
import Gamefield from "./Gamefield";
export default class Game {
    field: Gamefield;
    // apple: Apple;
    constructor() {
        this._initEventListeners()
        this.field = new Gamefield();
        // this.apple = new Apple();
    }

    public start() {
        this._initGameLoop()
    }

    public stop() {
        this._gameIsOver = true;
    }

    private _tick() {
        if (this._updateState()) {
            this._draw();
        }
    }

    private _updateState(): boolean {
        // Snake.updateSnake();
        // Apple.updateApple();
        console.log("Обновляем...");
        return true
    }

    private _draw() {
        // Apple;
        // this.field.drawField();
        console.log("Рисуем...");
    }

    private _initGameLoop() {
        requestAnimationFrame(() => {
            if (!this._gameIsOver) {
                this._tick();
                this._initGameLoop();
            }
        })
    }

    private _processEvent(key: string) {
        console.log("Не тыкай!!! --> " + key);
        // switch(key) {
        //     case 'ArrowLeft' && direction != "Right":
        //         Snake.direction = "Left";
        //         break;
        //     case 'ArrowUp' && direction != "Down":
        //         Snake.direction = "Up";
        //         break;
        //     case 'ArrowRight' && direction != "Left":
        //         Snake.direction = "Right";
        //         break;
        //     case 'ArrowDown' && direction != "Гз":
        //         Snake.direction = "Down";
        //         break;
        // }
        switch(key) {
            case 'ArrowLeft':
                console.log("ТЫКТЫКТЫК")
                break;
        }
        this._updateState();
    }

    private _initEventListeners() {
        console.log('init user input');
        document.addEventListener('keydown', (event) => {
            this._processEvent(event.key);
        })
    }

    private _gameIsOver: boolean = false;
}