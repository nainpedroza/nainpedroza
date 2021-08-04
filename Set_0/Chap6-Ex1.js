class Shape{
    constructor(perimeter, area, edges){
        this.edges = edges;
        this.perimeter = perimeter;
        this.area = area;
    }
    display(){
        console.log(this.edges);
    }
}
class Triangle extends Shape{
  constructor(side1){
    super(side1*3, side1*Math.sqrt(3)/2,3);
    this.side = side1;
  } 
}
class Quadrilateral extends Shape{
  constructor(side1,side2){
    super(side1*2+side2*2,side1*side2,4);
    this.side1 = side1;
    this.side2 = side2;
  }
}
class Square extends Quadrilateral{
  constructor(side1){
    super(side1,side1);
  }
}
class anotherPolygon extends Shape{
    constructor(side, apothem, edges){
        super(edges*side, edges*side*apothem/2, edges);
        this.apothem = apothem;
        this.side = side;
    }
}
var newfi4 = new Square(3);
newfi4;
var newfi3 = new Triangle(2);
newfi3;
var newfi2 = new anotherPolygon(1,2,4);
newfi2;
var newfi = new Quadrilateral(2,3);
newfi;


/* output

Square {
  edges: 4,
  perimeter: 12,
  area: 9,
  side1: 3,
  side2: 3,
  __proto__: { constructor: ƒ Square() }
}
Triangle {
  edges: 3,
  perimeter: 6,
  area: 1.7320508075688772,
  side: 2,
  __proto__: { constructor: ƒ Triangle() }
}
anotherPolygon {
  edges: 4,
  perimeter: 4,
  area: 4,
  apothem: 2,
  side: 1,
  __proto__: { constructor: ƒ anotherPolygon() }
}
Quadrilateral {
  edges: 4,
  perimeter: 10,
  area: 6,
  side1: 2,
  side2: 3,
  __proto__: { constructor: ƒ Quadrilateral() }
}*/
