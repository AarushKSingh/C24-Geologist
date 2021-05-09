class rub{
    constructor(x,y){
    var options={
        density:0.3,
        friction:5,
        restitution:1
    }
    this.body = Bodies.circle(x,y,40,options)
     World.add(world,this.body);
     
}
display(){
   var pos=this.body.position
   var angle = this.body.angle
   
   push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("brown") 
        //circle(CENTER);
        ellipse( 0, 0, 40,40);
        pop();
}

}

