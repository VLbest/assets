var mode = "offline";
var playerOne;
var playerTwo;

function Player(name, color){
    this.name = name;
    this.color = color;
    this.ava;
    this.request = "no";
}

function createPlayers(){
    playerOne = new Player("First", "black");

    playerTwo = new Player("Second", "white");

}


createPlayers();