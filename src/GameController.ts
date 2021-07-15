import Game from "./Game";

export enum Movement {
    Left,
    Right,
    Top,
    Bottom
}

export default class GameController
{
    private readonly Game: Game;

    constructor()
    {
        this.Game = new Game();
    }

    public processTouch(key: string): void
    {
        let direction : Movement;

        switch(key) {
            case 'ArrowLeft':
                direction = Movement.Left
                break;
            case 'ArrowUp':
                direction = Movement.Top;
                break;
            case 'ArrowRight':
                direction = Movement.Right;
                break;
            case 'ArrowDown':
                direction = Movement.Bottom;
                break;
        }
        this.Game.update(direction);
    }
}