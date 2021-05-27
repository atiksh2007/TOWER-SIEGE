class Pen{
constructor(x,y,r){
var op={
    restitution:0.8,
    friction:1.0,
    density:1.0,
}
this.body=Bodies.circle(x,y,r);
World.add(world,this.body);
this.r=r
this.image=loadImage("polygon.png");
}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
strokeWeight(5);
stroke("black");
imageMode(CENTER);
image(this.image,0,0,40,40);
pop();
}




}
