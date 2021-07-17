export default class Score {

    scoreBlock :HTMLElement;
    score: number = 0;

    constructor(score = 0) {

        this.scoreBlock = document.getElementById("score__count") as HTMLElement;
        this.score = score;

        this.draw();

    }

    incScore() {
        this.score++;
        this.draw();
    }

    setToZero() {
        this.score = 0;
        this.draw();
    }

    draw() {
        this.scoreBlock.innerHTML = "" + this.score;
    }
    
}