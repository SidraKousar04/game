let btnbox = document.querySelectorAll(".btn");

let turn = "X";
let isGameOver = false;


btnbox.forEach((e) => {
  // e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      cheakWin();
      cheakDraw();
      changeTurn();
    }
  });
});

function changeTurn() {
  if (turn === "X") {
    turn = "O";
    document.querySelector(".bg").style.left = "96px";
  } else {
    turn = "X";
    document.querySelector(".bg").style.left = "0";
  }
}

function cheakWin() {
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    let v0 = btnbox[winConditions[i][0]].innerHTML;
    let v1 = btnbox[winConditions[i][1]].innerHTML;
    let v2 = btnbox[winConditions[i][2]].innerHTML;

    if (v0 != "" && v0 === v1 && v0 === v2) {
      isGameOver = true;
      document.querySelector(".results").innerHTML = turn + " winner";
      document.querySelector(".new").style.display = "inline";
      document.querySelector(".reset").style.display = "none";

      for ( j = 0; j < 3; j++) {
        btnbox[winConditions[i][j]].style.backgroundColor = "#ef5c74";
        btnbox[winConditions[i][j]].style.color = "#fff";
      }
    }
  }
}

function cheakDraw()
{
    if(!isGameOver)
    {
      let isDraw = true;
      btnbox.forEach(e =>{
        if(e.innerHTML === "") isDraw = false;
      })

      if(isDraw)
      {
        isGameOver = true;
        document.querySelector(".results").innerHTML = "Draw";
      document.querySelector(".new").style.display = "inline";
      document.querySelector(".reset").style.display = "none";
      }
    }
}



document.querySelector('.new').addEventListener('click',()=>{
  isGameOver = false;
  turn = 'X';
  document.querySelector('.bg').style.left = "0";
  document.querySelector(".results").innerHTML = "";
  document.querySelector(".new").style.display = "none";
  document.querySelector(".reset").style.display = "inline";

  btnbox.forEach(e =>{
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "#2a2522";
  })
})

document.querySelector('.reset').addEventListener('click',()=>{
  isGameOver = false;
  turn = 'X';
  document.querySelector('.bg').style.left = "0";
  document.querySelector(".results").innerHTML = "";
  document.querySelector(".reset").style.display = "inline";

  btnbox.forEach(e =>{
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "#2a2522";
  })
})

