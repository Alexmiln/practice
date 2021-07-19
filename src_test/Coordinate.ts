export default class Coordinate
{
    private x: number;
    private y: number;

    constructor(x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    public getX(): number
    {
        return this.x;
    }

    public getY(): number
    {
        return this.y;
    }

    public static checkCoordinates(leftCoordinate: Coordinate, rightCoordinate: Coordinate): boolean
    {
        return leftCoordinate.getX() === rightCoordinate.getX()
            && leftCoordinate.getY() === rightCoordinate.getY();
    }
}