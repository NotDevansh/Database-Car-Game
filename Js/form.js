class Form
{
 constructor()
 {
  this.input = createInput('Name')
  this.button = createButton("Play")
  this.greeting = createElement('h3')
   
 }
 display()
 {
   var title = createElement('h2')
   title.html("Car Racing Game")
   title.position(130,0)
   this.input.position(130,160)
   this.button.position(250,200)


   this.button.mousePressed(()=>{
      player.name = this.input.value()
      this.input.hide()
      this.button.hide()
      playerCount+=1 
      player.index = playerCount
      player.updateCount(playerCount)
      player.update()
      
      this.greeting.html("Hey "+player.name)
      this.greeting.position(130,160);
      })

 }
 hidden()
 {
  this.input.hide()
  this.button.hide()
  this.greeting.hide()
 }
}
