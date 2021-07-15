import {Movement} from "./GameController";
import {CellType} from "./Cell";
import Cell from "./Cell";

export default class GameField
{
    private readonly Column: number = 100;
    private readonly Line: number = 100;

    private readonly SnakeHead: Cell = {x: 5, y: 5};
    private readonly SnakeTail: Cell = {x: 6, y: 5};

    private field: Array<Array<Cell>>;
    private snake!: Snake;

    constructor()
    {
        this.field = this.initField();
    }

    public update(direction: Movement): void
    {
        //отобразить значение -> newDirection
        //Snake.moveHead(direction);
        //Snake.moveTail(newDirection);
    }

    private initField(): Array<Array<Cell>>
    {
        let field: Array<Array<Cell>> = [];

        for (let i = 0; i < this.Column; i++)
        {
            for (let j = 0; j < this.Line; j++)
            {
                field[i][j] = new Cell(CellType.Void);
            }
        }

        return this.spawnApple(this.spawnSnake(field));
    }

    private spawnSnake(field: Array<Array<Cell>>): Array<Array<Cell>>
    {
        this.snake = Snake(this.SnakeHead, this.SnakeTail);

        field[this.SnakeHead.x][this.SnakeHead.y] = CellType.Snake;
        field[this.SnakeTail.x][this.SnakeTail.y] = CellType.Snake;

        return field;
    }

    private spawnApple(field: Array<Array<Cell>>): Array<Array<Cell>>
    {
        let isGenerated = false;

        do
        {
            const x: number = Math.random();
            const y: number = Math.random();

            if (field[x][y] !== CellType.Snake)
            {
                field[x][y] = CellType.Apple;
                isGenerated = true;
            }
        } while (isGenerated);

        return field;
    }
}