import {Movement} from "./GameController";
import GameField from "./GameField";

export default class Game
{
    private readonly GameField: GameField;

    constructor()
    {
        this.GameField = new GameField;
    }

    public update(direction: Movement): void
    {
        this.GameField.update(direction);
    }
}