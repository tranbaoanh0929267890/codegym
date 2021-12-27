let GameBoard = function (id, boardWidth, boardHeight) {
  this.canvas = document.getElementById(id);
  this.canvas.width = boardWidth;
  this.canvas.height = boardHeight;
  this.ctx = this.canvas.getContext("2d");

  
//   this.drawBoard = function () {
//     //   this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
//       this.bar.drawBar();
//     //   this.ball.drawBall();
//       requestAnimationFrame(this.drawBoard);
//   }


};
