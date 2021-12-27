let Ball = function (gameBoard, bar) {
  this.gameBoard = gameBoard;
  this.bar = bar;
  this.ballX = 50;
  this.ballY = 50;
  this.ballRadius = 10;
  this.speedY = Math.random() * (7 - 3) + 3;
  this.speedX = Math.random() * (7 - 3) + 3;

  this.drawBall = function () {
    this.gameBoard.ctx.beginPath();
    this.gameBoard.ctx.arc(
      this.ballX,
      this.ballY,
      this.ballRadius,
      0,
      Math.PI * 2
    );
    this.gameBoard.ctx.fillStyle = "green";
    this.gameBoard.ctx.fill();
    this.gameBoard.ctx.strokeStyle = "white";
    this.gameBoard.ctx.lineWidth = 5;
    this.gameBoard.ctx.stroke();
    this.gameBoard.ctx.closePath();
  };

  this.move = function () {
    if (
      this.ballX + this.speedX >
        this.gameBoard.canvas.width - this.ballRadius ||
      this.ballX + this.speedX < this.ballRadius
    ) {
        this.ballX -=2;
        this.ballY -=2;
      this.speedX = -this.speedX;
    }

    /*create wall collision 2...*/

    if (this.ballY + this.speedY < this.ballRadius) {
      this.speedY = -this.speedY;
    }

    if(checkCollision(this,this.bar)){
        this.speedX = -this.speedX;
        this.speedY = -this.speedY;
    }

    if(this.ballY >= this.gameBoard.canvas.height) alert("Lose");
    this.ballY += this.speedY;
    this.ballX += this.speedX;
  };
  function checkCollision(ball, bar) {
    let Ax = ball.ballX;
    let Ay = ball.ballY;

    let rect_left = bar.barX;
    let rect_top = bar.barY;
    let rect_right = bar.x + bar.barWidth;
    let rect_bottom = bar.barY + bar.barHeight;

    if (ball.ballX < rect_left) Ax = rect_left;
    else if (ball.ballX > rect_right) Ax = rect_right;

    if (ball.ballY< rect_top) Ay = rect_top;
    else if (ball.ballY > rect_bottom) Ay = rect_bottom;

    let dx = ball.ballX - Ax;
    let dy = ball.ballY - Ay;

    return dx * dx + dy * dy <= ball.ballRadius * ball.ballRadius;
  }
};
