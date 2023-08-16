import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(5, 10, 15,20);

// declare an array of shapes ... initially empty
let theShapes:Shape[] =[];

// add the shapes to the array
theShapes.push(myRectangle);
theShapes.push(myCircle);
theShapes.push(myShape);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    
}