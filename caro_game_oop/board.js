// import Player from "./player";
class Board {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  createBoard = function () {
    //   let player = new Player(X);
    let html = "";
    for (let i = 0; i < this.row; i++) {
      html += "<tr>";
      for (let j = 0; j < this.col; j++) {
        html += `<td id="cell-${i}-${j}" onclick="clickCell(${i},${j})"></td>`;
        // html += `<td id="cell-${i}-${j}"></td>`;
      }
      html += "</tr>";
    }
    document.getElementById("board").innerHTML = html;
  };
}
