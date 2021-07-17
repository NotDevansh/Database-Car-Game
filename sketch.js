var database;
var gameState = 0, playerCount ;

var form, game ,player
var allPlayers

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game = new Game()
  game.getState()
  game.start()


}

function draw()
{
  if(playerCount === 4)
  {
    game.update(1)
  }
  if(gameState === 1)
  {
    game.play()
  }
}


