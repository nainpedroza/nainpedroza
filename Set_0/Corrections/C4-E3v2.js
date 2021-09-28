class CustomObject {
    constructor(value){
        if (typeof value === 'number'){
            this.value = value
        }
        else{
            throw new Error("It is not a number");
        }
        Object.defineProperty(this, 'value', {
          get() { return value },
          set(value) { 
            if(typeof value === 'number'){
              this.value = value
            }
            else{
              throw new Error("It is not a number");
            }
          }
        })
    }
}
var obj1 = new CustomObject(2);
obj1; //value: 2
//reasigning the value
obj1.value = 'asdf' // Error: It is not a number
