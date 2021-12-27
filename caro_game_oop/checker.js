class Checker {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }
  gameOver = function (count) {
    if (count >= 5) {
      alert("WIN");
    }
  };
  checkWin = function () {
    this.checkNgang(this.i, this.j);
    this.checkDoc(this.i, this.j);
    this.checkCheoPhai(this.i, this.j);
    this.checkCheoTrai(this.i, this.j);
  };
  getValueCell = function (i, j) {
    if (i > 10 || i < 0 || j > 10 || j < 0) return;
    let id = "cell-" + i + "-" + j;
    let cell = document.getElementById(id);
    return cell.innerHTML;
  };
  checkNgang = function (i, j) {
    let count = 1;
    //   console.log(count);
    let numRight = 1;
    while (this.getValueCell(i, j) == this.getValueCell(i, j + numRight)) {
      count++;
      // console.log(count);
      numRight++;
    }
    let numLeft = 1;
    while (this.getValueCell(i, j) == this.getValueCell(i, j - numLeft)) {
      count++;
      numLeft++;
    }

    this.gameOver(count);
  };

  checkDoc = function (i, j) {
    let count = 1;
    let numTop = 1;
    while (this.getValueCell(i, j) == this.getValueCell(i + numTop, j)) {
      count++;
      numTop++;
    }
    let numBottom = 1;
    while (this.getValueCell(i, j) == this.getValueCell(i - numBottom, j)) {
      count++;
      numBottom++;
    }
    this.gameOver(count);
  };
  checkCheoPhai = function (i, j) {
    let count = 1;
    let numTop = 1;
    // check sang phai
    while (
      this.getValueCell(i, j) == this.getValueCell(i - numTop, j + numTop)
    ) {
      count++;
      numTop++;
    }
    // check sang trai
    let numBottom = 1;
    while (
      this.getValueCell(i, j) == this.getValueCell(i + numBottom, j - numBottom)
    ) {
      count++;
      numBottom++;
    }
    this.gameOver(count);
  };

  checkCheoTrai = function (i, j) {
    let count = 1;
    let numTop = 1;
    // check sang trai
    while (
      this.getValueCell(i, j) == this.getValueCell(i - numTop, j - numTop)
    ) {
      count++;
      numTop++;
    }

    // check sang phai
    let numBottom = 1;
    while (
      this.getValueCell(i, j) == this.getValueCell(i + numBottom, j + numBottom)
    ) {
      count++;
      numBottom++;
    }
    this.gameOver(count);
  };
}
