var states = {
    "N":"N",
    "O":"O",
    "X":"X"
}

function Cell(el, posX, posY){
    this.node = el;
    this.Ar_x = posX;
    this.Ar_y = posY;
    this.state = states["N"];
}

var CellsList = {};

function getAllNodes(){
    var tdArray = document.getElementsByTagName("td");
    decodeTable(tdArray);
}

function decodeTable(tdArray){
    for(var i = 0; i<tdArray.length; i++){
        var x = tdArray[i].attributes[1].nodeValue;
        var y = tdArray[i].attributes[2].nodeValue;
        var id = "c_"+x+"_"+y;
        CellsList[id] = new Cell(tdArray[i],x, y);
    }
}

getAllNodes();

