let Bar = function (gameBoard,barWitdh, barX) {
    this.gameBoard = gameBoard;
    this.barWitdh = barWitdh;
    this.barHeight = 5;
    this.barX = barX;
    this.barY = this.gameBoard.canvas.height - 20;
    this.drawBar = function () {
      this.gameBoard.ctx.beginPath();
      this.gameBoard.ctx.rect(this.barX, this.barY, this.barWitdh, this.barHeight);
      this.gameBoard.ctx.fillStyle = "black";
      this.gameBoard.ctx.fill();
      this.gameBoard.ctx.closePath();
    };
    this.moveLeft = function () {
      this.barX -= 15;
    };

    this.moveRight = function () {
      this.barX += 15;
    };
  };