var str = '{prop1: 42, myFn: function(a,b){ return a+b+this.prop1;}}'
function dataParse(str) { return eval(`(${str})`); }
dataParse(str);//{ prop1: 42, myFn: [Function: myFn] }
