// const board = document.querySelector(".gameboard");
// const body = document.querySelector("body")

let my_arr = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

let count = 0;

let toe_board = document.querySelector(".gameboard");
let resetButton = document.querySelector(".reset");
let sbutton = document.querySelector("#playerSubmit");

toe_board.addEventListener("click", (e) => {
  let selection = e.target.innerHTML;
  let position = e.target.id.split("");

  if (count === 0 && selection === "") {
    e.target.innerHTML = "X";
    my_arr[position[0]][position[1]] = "X";
    count++;
  } else if (count === 1 && selection === "") {
    e.target.innerHTML = "O";
    my_arr[position[0]][position[1]] = "O";
    count--;
  }

  findwinner();
});

function findwinner() {
  let row = Checker(my_arr)
  let columnArr = Checker(Transpose(my_arr))
  let diagnols = Checker(Dia(my_arr))

  if (row[0] === "XXX" || columnArr[0] === "XXX" || diagnols[0] === "XXX") {
    console.log("X is the Winner");
    Winner('X')
  }
  if (row[0] === "OOO" || columnArr[0] === "OOO" || diagnols[0] === "OOO") {
    console.log("O is the winner");
    Winner('O')
  }
}// let turnPlayer = 0;

// board.addEventListener("click",(e) => {
//     e.stopPropagation();
//     console.log(e.target.id)
//     console.dir(e.target.innerHTML)

//     if(e.target.innerHTML === "") {
//         if(turnPlayer % 2 === 0 && e.target.innerHTML === "") {
//             e.target.innerHTML = "X"
//         } else {
//             e.target.innerHTML = "O"
//         }
//     turnPlayer++;
//     }
//     // if(turnPlayer % 2 === 0 && e.target.innerHTML === "") {
//     //     e.target.innerHTML = "X"
//     // } else {
//     //     e.target.innerHTML = "O"
//     // }

// });


// body.addEventListener("click", (e) =>{
//     e.target.style.backgroundColor = "red";
// })