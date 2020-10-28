class Box{

    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height);
        this.w= width;
        this.h=height;
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.w,this.h);
    }


}