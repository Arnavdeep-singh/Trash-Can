class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options, 35);
      this.radius = radius;
      this.Ball = loadImage('paper.png');
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      imageMode(CENTER);
      image(this.Ball, 0, 0, 70, 70);

      // ellipseMode(RADIUS);
      // fill(97,152,162);
      // strokeWeight(0);
      // ellipse(0,0, this.radius);
      pop();

    }
  }
  