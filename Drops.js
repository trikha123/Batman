class Drops{
 
        constructor(x, y) {
            var options = {
                'restitution':0.8,
                'friction':0.1,
                'density':1.0,
                isStatic:false
            }
            this.body = Bodies.circle(x, y, 10, options);
            this.width = width;
            this.height = height;
            
            World.add(world, this.body);
          }
          
          display(){
              var maxDrops = 100;
    for(var i = 0; i< maxDrops; i++){
      this.push(new createDrop(random(0, 400)), random(0, 400));
      if(this.body.position.y>600){
        this.body,position.x= random(0, 600)
        this.body.position.y = 0

    }

    }
  }
}

           

  