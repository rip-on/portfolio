let boxes=document.querySelectorAll(".box");
let turn = "X";
let isGameOver =false;
boxes.forEach(box=>{
    box.innerHTML="";
    box.addEventListener("click",()=>{
        if(!isGameOver && box.innerHTML===""){
            box.innerHTML=turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})
function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    }
    else{
        turn="X";
        document.querySelector(".bg").style.left="0";
    }
}
function checkWin(){
    let winCondition = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [3,4,5],
        [6,7,8],
        [2,5,8],
        [1,4,7],
        [2,4,6]
    ]
    for(let i=0;i<winCondition.length;i++){
        let v0 =boxes[winCondition[i][0]].innerHTML;
        let v1 =boxes[winCondition[i][1]].innerHTML;
        let v2 =boxes[winCondition[i][2]].innerHTML;
        if(v0!="" && v0===v1 && v0===v2){
            isGameOver=true;
            document.querySelector("#result").innerHTML = turn + " Win!";
            document.querySelector("#play-again").style.display="inline";
            for(j=0; j<3; j++){
                boxes[winCondition[i][j]].style.backgroundColor="#08d9d6"
                boxes[winCondition[i][j]].style.color ="#000"
            }
        }
    }
}
function checkDraw(){
    if(!isGameOver){
        let isDraw = "true";
        boxes.forEach(box=>{
            if(box.innerHTML==="") isDraw=false;
        })
        if(isDraw){
            isGameOver=true;
            document.querySelector("#result").innerHTML="Draw";
            document.querySelector("#play-again").style.display="inline"
        }
    }
}
document.querySelector("#play-again").addEventListener("click",()=>{
    isGameOver = false;
    turn="X";
    document.querySelector(".bg").style.left="0";
    document.querySelector("#result").innerHTML= "";
    document.querySelector("#play-again").style.display="none";
    boxes.forEach(box=>{
        box.innerHTML="";
        box.style.removeProperty("background-color");
        box.style.color = "#fff";
    })
}
)
