const player={
    marker : "x",
}

const boxElements = document.querySelectorAll(".box");

boxElements.forEach(box => {
    box.addEventListener("click", setMarker);

    function setMarker(){
        if(!(box.childNodes.length > 0)){
            let playerMarker = player.marker
            box.textContent = playerMarker
        }else{
        return
    }
    }
});




