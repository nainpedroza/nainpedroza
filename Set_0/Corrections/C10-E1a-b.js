//a.
var myLib = {
	math: {
		real: {
			add: function (a, b){ return a+b},
			sub: function (a, b){ return a-b},
			mul: function (a, b){ return a*b}
		},
		complex: {
                                                Num: function (real,img){
                                                    this.real = real;
                                                    this.img = img;
                                                    let temp = [];
                                                    temp.push(this.real);
                                                    temp.push(this.img);
                                                    return temp;
                                                  },
			add: function (a, b){
                                                    let temp2 = [];
                                                    temp2.real = a[0]+b[0];
                                                    temp2.img = a[1]+b[1];
                                                    return temp2;
                                                 },
			sub: function (a, b){
                                                    let temp2 = [];
                                                    temp2.real = a[0]-b[0];
                                                    temp2.img = a[1]-b[1];
                                                    return Object.values(temp2);
                                                 },
			mul: function (a, b){
                                                    let temp2 = [];
                                                    temp2.real = a[0]*b[0]-a[1]*b[1];
                                                    temp2.img = a[0]*b[1]+a[1]*b[0];
                                                    return temp2;
                                                },
                                   },
        matrix: {
          add: function (a, b){           
            if(a.length != b.length){console.error("Not possible to sum up two matrices of difference size")}
            var temp2 = [];
            for(var i=0; i<a.length; i++) {
                temp2[i] = new Array(a.length);
            }
            for(let i=0;i<a.length; i++){
                for(let j=0; j<a.length; j++){
                      temp2[i][j] = a[i][j] + b[i][j];              
                }

            }
          return temp2;
          },
          sub: function (a, b){
            if(a.length != b.length){console.error("Not possible to substract up two matrices of difference size")}
            var temp2 = [];
            for(var i=0; i<a.length; i++) {
                temp2[i] = new Array(a.length);
            }
            for(let i=0;i<a.length; i++){
                for(let j=0; j<a.length; j++){
                      temp2[i][j] = a[i][j] - b[i][j];              
                }

            }
          return temp2;
          },
          mul: function (a, b){
            if(a.length != b.length){console.error("Not possible to multiply up two matrices of difference size")}
            var temp2 = [];
            for(var i=0; i<a.length; i++) {
                temp2[i] = new Array(a.length);
            }
            for(let i=0;i<a.length; i++){
                for(let j=0; j<a.length; j++){
                   var sum = 0;
                   for(let k=0; k<a.length; k++){
                        sum += a[i][k]*b[k][j];   
                   }
                   temp2[i][j] = sum;
                } 
            }
          return temp2;
          },
          eye: function (size){ var a = Array.apply(null, new Array(size)); return a.map(function(x, i) { return a.map(function(y, k) { return i == k ? 1 : 0; }) }) },
          dot: function (m, a){
              let c = [];
              if (m.length != a.length){ console.error("Not possible to evaluate dot product")}
              for(var i=0; i<m.length; i++){
                  var sum = 0;
                  for(var j=0; j<m.length; j++){
                      sum += a[i][j]*m[j]
                  }
                  c[i] = sum;
              }
              return c;
          },
          times: function (a, b){
            let c = [];
            if (b.length==1){b[1] = 0;}
            var temp2 = [];
            for(var i=0; i<a.length; i++) {
                temp2[i] = new Array(a.length);
            }
            var signus = "+"
            var m = 1
            for(let i=0;i<a.length; i++){
                for(let j=0; j<a.length; j++){
                    if(a[i][j]*b[1]<0){signus = "-"; m = -1}
                    else{signus = "+"}
                   temp2[i][j] = a[i][j]*b[0] +signus+(m*a[i][j]*b[1])+"i";
                }
                
            }
          return temp2;
          },
        }
     }
};

//b. Simplified without the with statement
const real = myLib.math.real
const complex = myLib.math.complex
const matrix = myLib.math.matrix
var answer = real.sub(
                  real.add (20, 22), 
                  real.mul(2,5));

var ans = matrix.times(
          matrix.eye (4), 
          complex.sub (
                  new complex.Num (
                         real.add(5,2),
                         -3), 
                  new complex.Num (3,4)
          )
      );
answer; //32
ans; /* [ '4-7i', '0+0i', '0+0i', '0+0i' ],
  [ '0+0i', '4-7i', '0+0i', '0+0i' ],
  [ '0+0i', '0+0i', '4-7i', '0+0i' ],
  [ '0+0i', '0+0i', '0+0i', '4-7i' ] */
