class slingshot{
    constructor(bodyA, pointB){
var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.05,
    length:15
}
this.pointB = pointB
this.body = Constraint.create (options)
World.add (world,this.body)
    }  
    Fly() {
        this.body.bodyA = null
    }
    display(){
        if(this.body.bodyA){
         var pointA = this.body.bodyA.position
         var pointB = this.pointB
        line (pointA.x, pointA.y, pointB.x, pointB.y)
                }
        }

}