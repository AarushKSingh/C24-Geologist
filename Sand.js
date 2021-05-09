class san{
    constructor(x,y){
    var options={
        density:0.3,
        friction:5,
        restitution:1
    }
    this.body = Bodies.circle(x,y,10,options)
     World.add(world,this.body);
     
}
display(){
   var pos=this.body.position
   var angle = this.body.angle
   
   push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("yellow") 
        //circ(CENTER);
        ellipse( 0, 0, 10,10);
        pop();
}

}

