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
        }else{
        return
    }
    }
});

