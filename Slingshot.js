class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image=loadImage("sprites/sling1.png")
        this.image2=loadImage("sprites/sling2.png")
        this.image3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(104,71,84)
            
            if(pointA.x<150){
            
            }
            else   {
                image(this.image3,pointA.x+25,pointA.y)
                line(pointA.x, pointA.y, pointB.x+30, pointB.y);
                line(pointA.x, pointA.y, pointB.x-30, pointB.y);
            }

        }
        image(this.image,180,20)
        image(this.image2,150,20)
        
    }
    
}