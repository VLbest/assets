function setListenner(){
    var table = document.getElementsByTagName("tbody")[0];
    table.addEventListener("touchstart", handleStart, false);
    table.addEventListener("touchend", handleEnd, false);
    table.addEventListener("touchcancel", handleCancel, false);
}
function handleStart(e){
    e.preventDefault();
    Log("here");
    var id = getCellID(e);
    CellsList[id].node.style.backgroundColor = currentPlayer.color;
    currentPlayer.request == "ok";
    //CellsList[id].state = states.X;
}

function handleEnd(e){
    Log("there");
    var id = getCellID(e);
    
}

function handleCancel(e){
    var id = getCellID(e);
}

function getCellID(event){
    var x = event.target.attributes[1].nodeValue;
    var y = event.target.attributes[2].nodeValue;
    return "c_"+x+"_"+y;
}

setListenner();