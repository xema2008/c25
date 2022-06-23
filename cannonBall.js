class CannonBall{
    constructor(x,y){
        var options={
            isStatic:true
        };
        this.r=30;
        this.Body=Bodies.circle(x,y,this.r,options);
        this.image=loadImage("assets/cannonball.png");
        World.add(world,this.Body);
    }

    display(){
        var pos=this.Body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
    }



}