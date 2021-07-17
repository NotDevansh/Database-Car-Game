class Game 
{
  constructor()
  {
    
  }
 getState()
 {
   var Refer = database.ref('gameState')
   Refer.on('value',function(data){
     gameState=data.val();
   })
 } 
update(State)
{
  database.ref('/').update({
    'gameState':State
  })
}
async start()
{
  if(gameState === 0)
  {
    player = new Player()
    var plref=await database.ref('playeCount').once("value");
    if(plref.exists())
    {
      playerCount=plref.val();
      player.getCount()
    }
    
    form = new Form()
    form.display()
  }
}
play()
{
  form.hidden()
  textSize(30)
  text("GameStart",120,100)
  Player.getPlayerinfo()
  if(allPlayers !== undefined)
  {
    var pos=120;
    //for(var plr=0;plr<allPlayers.length;plr++)
    for(var plr in allPlayers)
    {
      if(plr==="player"+player.index)
      {
        fill("red")
      }
      else
      {
        fill("black")
      }

      //pos=pos+30;
      pos+=30;
      text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,pos)
    }
    
  }
  if(keyIsDown(UP_ARROW)&&player.index!==null)
  {
    //player.distance=player.distance+50;
    player.distance+=50;
    player.update();
  }
  
}
}
  
