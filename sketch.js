
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Ham = new Hamm(400,650)
	ir = new iro(200,650)
	pla = new plai(400,695,800,10)
	sto = new ston(500,650)
	rubbe = new rub(300,650)
	Sna1 = new san(386,650)
	Sna2 = new san(326,650)
	Sna3 = new san(319,650)
	Sna4 = new san(394,650)
	Sna5 = new san(358,650)
	Sna6 = new san(336,650)
	Sna7 = new san(374,650)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(38,208,255);

  Ham.display();
  ir.display();
  pla.display();
  sto.display();
  rubbe.display();


  Sna1.display();
  Sna2.display();
  Sna3.display();
  Sna4.display();
  Sna5.display();
  Sna6.display();
  Sna7.display();
  
  drawSprites();
 
}



