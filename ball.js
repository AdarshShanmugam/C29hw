class Ball {
    constructor(x,y){
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;

        World.add(world, this.body);
       
    }
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        transalate(pos.x, pos.y);
        rotate(angle);
        elipseMode(RADIUS);
        strokeWeight (4);
        stroke ("green");
        fill(255);
        ellipse(0, 0, this.radius *2, this.radius *2);
        pop();
        super.display();
    }

}