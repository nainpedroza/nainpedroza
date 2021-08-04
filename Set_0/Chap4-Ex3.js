class CustomObject {
    constructor(value){
        if (typeof value === 'number'){
            this.value = value
        }
        else{
            console.log("It is not a number");
        }
    }
}
var obj1 = new CustomObject(2);
obj1; //value: 2
var obj2 = new CustomObject("hola"); // It is not a number
obj2;
