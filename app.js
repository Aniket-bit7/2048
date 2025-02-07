var board;
var score = 0;
var rows = 4;
var column = 4;

window.onload = function () {
  setGame();
};

function setGame() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < column; c++) {
      //<div id = "0-0"></div>
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      let num = board[r][c];
    }
  }
}
