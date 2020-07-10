class Paper{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution: 1.0,
            density: 1.2,
            friction: 0.5
        }
         this.body = Bodies.circle(x,y,radius,options);
         this.radius = radius;
            
         World.add(world,this.body);
    }
   
    display(){
       var pos = this.body.position;
       translate(pos.x,pos.y);
       ellipseMode(CENTER);
       fill(255,192,203);
       ellipse(0,0,this.radius);
    }
   }