const player1={
    marker : "X",
}

const player2={
    marker : "O",
}


function playerTurn(){
    if(roundNumber%2){
        return player1.marker
    }else{
        return player2.marker
    }
}


const boxElements = document.querySelectorAll(".box");

boxElements.forEach(box => {
    box.addEventListener("click", setMarker);

    roundNumber = 0

    function setMarker(){
        if(!(box.childNodes.length > 0)){
            let playerMarker = playerTurn()
            roundNumber++
            box.textContent = playerMarker
            checkWinCondition()
        }else{
        return
    }
    }
});

function checkWinCondition(){
    let box1 = document.querySelector("#box1").textContent;
    let box2 = document.querySelector("#box2").textContent;
    let box3 = document.querySelector("#box3").textContent;
    let box4 = document.querySelector("#box4").textContent;
    let box5 = document.querySelector("#box5").textContent;
    let box6 = document.querySelector("#box6").textContent;
    let box7 = document.querySelector("#box7").textContent;
    let box8 = document.querySelector("#box8").textContent;
    let box9 = document.querySelector("#box9").textContent;

    if(box1 === box2 && box2 === box3 && box1 != "" && box2 !="" && box3 !=""){
        console.log("row1 Winner")
    }else if(box4 === box5 && box5 === box6 && box4 != "" && box5 !="" && box6 !=""){
        console.log("row 2 winner")
    }else if(box7 === box8 && box8 === box9 && box7 != "" && box8 !="" && box9 !=""){
        console.log("row 3 winner")
    }else if(box1 === box4 && box4 === box7 && box1 != "" && box4 !="" && box7 !=""){
        console.log("row d1 winner")
    }else if(box2 === box5 && box5 === box8 && box2 != "" && box5 !="" && box8 !=""){
        console.log("row d2 winner")
    }else if(box3 === box6 && box6 === box9 && box3 != "" && box6 !="" && box9 !=""){
        console.log("row d3 winner")
    }else if(box1 === box5 && box5 === box9 && box1 != "" && box5 !="" && box9 !=""){
        console.log("row s1 winner")
    }else if(box3 === box5 && box5 === box7 && box3 != "" && box5 !="" && box7 !=""){
        console.log("row s2 winner")
    }

}
