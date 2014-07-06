var nbOfCollumn = 8;
var nbOfLines = nbOfCollumn + 2;

function createTable(){
    for(var i = 0; i < nbOfLines; i++){
        placeLine();
        for(var j = 0; j < nbOfCollumn; j++){
            placeCol(i+1, j+1);
        }
    }
}

function placeLine(){
    $(".game_table").append("<tr class='line'> </tr>")
}

function placeCol(y, x){
    $("<td class='cell' x="+x+" y="+y+"> </td>").appendTo( $("tr").last() );
}

createTable();