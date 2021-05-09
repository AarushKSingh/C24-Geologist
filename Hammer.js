class Hamm{
    constructor(x,y){
    var options={
        density:2,
        friction:1.0,
        restitution:1.5
    }
    this.body = Bodies.rectangle(x,y,50,40,options)
     World.add(world,this.body);
     
}
display(){
   var pos=this.body.position
   var angle = this.body.angle
   pos.x = mouseX
   pos.y = mouseY
   push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue") 
        rectMode(CENTER);
        rect( 0, 0, 50, 40);
        pop();
}

}