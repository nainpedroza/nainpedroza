class CustomObject {
    constructor(value){
        if (typeof value === 'number'){
            this.value = value
        }
        else{
            console.error("It is not a number");
        }
    }
}
var obj1 = new CustomObject(2);
obj1; //value: 2
var obj2 = new CustomObject("hello"); // It is not a number
obj2; // error in console
