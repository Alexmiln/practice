import GameController from "./GameController";

export function main(): void
{
    const gameController = new GameController();

    while (true)
    {
        document.addEventListener('keydown', (event) => {
            gameController.processTouch(event.key);
        });
    }
}

main();