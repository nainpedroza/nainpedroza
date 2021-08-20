//1.A
console.log(/.abc/.test("hello.abcdef")); //True

//1.B
console.log(/a+b?!!1{4}/.test("aaab!!1111")); //True

//2.A
console.log(/(january|february|march|april|may|june|july|august|september|october|november|december) \d{2},\ \d{4}$/gmi.test("January 11, 2001")); //True
