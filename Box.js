class Box{
constructor(x,y,width,height){

var options = {
    restitution : 1
}

this.body = Bodies.rectangle(x,y,width,height,options);

World.add(world, this.body);
this.width = width;
this.height = height;

}
display(){
var pos = this.body.position;

fill(255);

rectMode(CENTER);
rect(pos.x, pos.y, this.width, this.height);


}


}