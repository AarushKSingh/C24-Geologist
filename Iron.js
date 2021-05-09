class iro{
    constructor(x,y){
    var options={
        density:2,
        friction:1.0,
        restitution:0.5
    }
    this.body = Bodies.rectangle(x,y,60,20,options)
     World.add(world,this.body);
     
}
display(){
   var pos=this.body.position
   var angle = this.body.angle
   
   push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white") 
        rectMode(CENTER);
        rect( 0, 0, 60, 20);
        pop();
}

}

