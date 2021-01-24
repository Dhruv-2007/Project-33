class Division{
    constructor(x,y,width,height){
    var options = {
        'isStatic':true,
        'restitution':0.2
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body)

}

display(){
    push();
    var pos = this.body.position;
    fill("white");
    strokeWeight(4);
    stroke("black");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
  }
}