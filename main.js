const boxElements = document.querySelectorAll(".box");
const resultContainer = document.querySelector("#resultContainer")
const h1El = document.createElement("h1");

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

boxElements.forEach(box => {
    box.addEventListener("click", setMarker);

    roundNumber = 0

    function setMarker(){
        if(!(box.childNodes.length > 0)){
            let playerMarker = playerTurn()
            roundNumber++
            box.textContent = playerMarker
            checkWinCondition(roundNumber)
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
        return result(box1)
    }else if(box4 === box5 && box5 === box6 && box4 != "" && box5 !="" && box6 !=""){
        return result(box4)
    }else if(box7 === box8 && box8 === box9 && box7 != "" && box8 !="" && box9 !=""){
        return result(box7)
    }else if(box1 === box4 && box4 === box7 && box1 != "" && box4 !="" && box7 !=""){
        return result(box1)
    }else if(box2 === box5 && box5 === box8 && box2 != "" && box5 !="" && box8 !=""){
        return result(box2)
    }else if(box3 === box6 && box6 === box9 && box3 != "" && box6 !="" && box9 !=""){
        return result(box3)
    }else if(box1 === box5 && box5 === box9 && box1 != "" && box5 !="" && box9 !=""){
        return result(box1)
    }else if(box3 === box5 && box5 === box7 && box3 != "" && box5 !="" && box7 !=""){
       return result(box3)
    }else if(roundNumber == 9){
        h1El.textContent = "Draw";
        resultContainer.append(h1El)
    }

}



function result(winnerMarker){
    h1El.textContent = winnerMarker + "'s Win!"
    resultContainer.append(h1El)
    if(winnerMarker == "X"){
        return console.log("X is Winner!")
    }else if(winnerMarker == "O"){
        return console.log("O is Winner!")
    }
}