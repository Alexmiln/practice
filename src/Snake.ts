//     import Apple from "./Apple";
// import {GameConfig} from "./Config";
// import Score from "./Score";
//     let snakeCord = [];
//     snakeCord[0] = {
//         x: GameConfig.width / 2,
//         y: GameConfig.height / 2
//     }

//     let direction :string; //???

//     let snakeX = snakeCord[0].x;
//     let snakeY = snakeCord[0].y;

//     if (snakeX == Apple.x && snakeY == Apple.y) { //ИЛИ Apple.appleCord.x или Apple.appleCord.y
//         Score.incScore();
//         //Респавн Apple
//     } else {
//         snakeCord.pop();
//     }

//     snakeCord.pop();

//     if (snakeX < 1 || snakeX > GameConfig.width || snakeY < 1 || snakeY > GameConfig.height) {
//         //Game.stop
//     }

//     if(this.direction == "Left") snakeX -= 1;
//     if(this.direction == "Right") snakeX += 1;
//     if(this.direction == "Up") snakeY -= 1;
//     if(this.direction == "Down") snakeY += 1;

//     let newHead = {
//         x: snakeX,
//         y: snakeY
//     };

//     tailCrush(newHead, snakeCord)

//     snakeCord.unshift(newHead);

// //Tail Crash
//     function tailCrush(head, fullBody) {
//        for (let i = 0; i < fullBody.length; i++) {
//            if (head.x == fullBody[i].x && head.y == fullBody[i].y) {
//                //Game.stop
//            }
//        }
//     }

// // отрисовка
//     for(let i = 0; i < snakeCord.length; i++) {
//         this.context.fillStyle = i == 0 ? "#282825" : "#2e2d2a";
//         this.context.fillRect(Snake.snakeCord[i].x * GameConfig.cellSize, Snake.snakeCord[i].y * GameConfig.cellSize, GameConfig.cellSize, GameConfig.cellSize);
//     }


