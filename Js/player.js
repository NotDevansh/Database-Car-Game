class Player
{
 constructor()
 {
   this.index = null
   this.distance = 0
   this.name = null
 }
 getCount()
 {
   var Referp = database.ref('playerCount')
   Referp.on('value',(data)=>{
     playerCount=data.val();
   })
 } 
 updateCount(Count)
{
  database.ref('/').update({
    'playerCount':Count
  })
}

update()
{
   var plindex="players/player"+this.index; 
  database.ref(plindex).set({
      'name':this.name,
      'distance':this.distance
  })
  
}
static getPlayerinfo()
{
  var Referpl = database.ref('players')
   Referpl.on('value',(data)=>{
     allPlayers=data.val();
   })
}
}