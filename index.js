var k=-16 ;
function reset() {
  const starttime= 0; 
  let time =starttime* 60;
  const timeElement = document.getElementById("timer");

  setInterval(function updatetimer() {
    var min= Math.floor(time / 60);
    var sec= time % 60 ;
    timeElement.innerHTML= min +':'+ sec;
    time++;
    }, 1000);
}

  function swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;

    k++;
    document.getElementById("moves").innerHTML= k ;
  }

  function shuffle() {
    clearInterval(reset());
    k= -16 ;
    
    //Use nested loops to access each cell of the 3x3 grid
    for (var row = 1; row <= 4; row++) { //For each row of the 3x3 grid
      for (var column = 1; column <= 4; column++) { //For each column in this row

        var row2 = Math.floor(Math.random() * 4 + 1); //Pick a random row from 1 to 3
        var column2 = Math.floor(Math.random() * 4 + 1); //Pick a random column from 1 to 3

        swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
      }
    }
    
    reset();
  }

  function clickTile(row, column) {
    
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;
    if (tile != "tile16") {
      //Checking if white tile on the right
      
        if (document.getElementById("cell" + row + (column + 1)).className == "tile16") {
          swapTiles("cell" + row + column, "cell" + row + (column + 1));
         return;
        }
        // this below loops are try for making multiples moves function which  has some error so it is just commented out


        // else if (document.getElementById("cell" + row + (column + 2)).className == "tile16") {
        //   swapTiles("cell" + row + (column+1), "cell" + row + (column + 2));
        //   swapTiles("cell" + row + column, "cell" + row + (column + 1));
        //  return;
        // }
        // else if (document.getElementById("cell" + row + (column + 3)).className == "tile16") {
        //   swapTiles("cell" + row + (column+2), "cell" + row + (column + 3));
        //   swapTiles("cell" + row + (column+1), "cell" + row + (column + 2));
        //   swapTiles("cell" + row + column, "cell" + row + (column + 1));
        //  return;
        // }
      
      //Checking if white tile on the left
      if (column > 1) {
        if (document.getElementById("cell" + row + (column - 1)).className == "tile16") {
          swapTiles("cell" + row + column, "cell" + row + (column - 1));
          return;
        }
        // else if (document.getElementById("cell" + row + (column - 2)).className == "tile16") {
        //   swapTiles("cell" + row + (column), "cell" + row + (column -1));
        //   swapTiles("cell" + row + (column-1), "cell" + row + (column -2));
        //  return;
        // }
        // else if (document.getElementById("cell" + row + (column - 3)).className == "tile16") {
        //   swapTiles("cell" + row + (column), "cell" + row + (column -1));
        //   swapTiles("cell" + row + (column-1), "cell" + row + (column -2));
        //   swapTiles("cell" + row + (column-2), "cell" + row + (column -3));
        // return;
        // }
      }
      //Checking if white tile is above
      if (row > 1) {
        if (document.getElementById("cell" + (row - 1) + column).className == "tile16") {
          swapTiles("cell" + row + column, "cell" + (row - 1) + column);
          return;
        }
        // else if (document.getElementById("cell" + (row-2) + (column)).className == "tile16") {
        //   swapTiles("cell" + row + (column), "cell" + (row-1) + (column));
        //   swapTiles("cell" + (row-1) + (column), "cell" + (row-2) + (column));
        //   return;
        // }
        // else if (document.getElementById("cell" + (row-3) + (column)).className == "tile16") {
        //   swapTiles("cell" + row + (column), "cell" + (row-1) + (column ));
        //   swapTiles("cell" + (row-1) + (column), "cell" + (row-2) + (column ));
        //   swapTiles("cell" + (row-2)  + (column), "cell" + (row-3)  + (column ));
        //   return;
        // }
      }
      //Checking if white tile is below
      if (row < 4) {
        if (document.getElementById("cell" + (row + 1) + column).className == "tile16") {
          swapTiles("cell" + row + column, "cell" + (row + 1) + column);
          return;
        }
        // else if (document.getElementById("cell" + (row+2) + (column )).className == "tile16") {
        //   swapTiles("cell" + (row+1) + (column), "cell" + (row+2) + (column));
        //   swapTiles("cell" + (row) + (column), "cell" + (row+1) + (column));
        //  return;
        // }
        // else if (document.getElementById("cell" + (row+3) + (column )).className == "tile16") {
        //   swapTiles("cell" + (row+2) + (column), "cell" + (row+3) + (column ));
        //   swapTiles("cell" + (row+1) + (column), "cell" + (row+2) + (column ));
        //   swapTiles("cell" + (row)  + (column), "cell" + (row+1)  + (column ));
        //   return;
        // }
      }
    }
  }