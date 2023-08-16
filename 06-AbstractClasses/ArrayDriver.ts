import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(5, 10, 15,20);

// declare an array of shapes ... initially empty
let theShapes:Shape[] =[];

// add the shapes to the array
theShapes.push(myRectangle);
theShapes.push(myCircle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea()+"\n");
    
}