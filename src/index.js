module.exports = function solveEquation(equation) {
  
  var arr = equation.split(" ");
  var a, b, c, D, x1, x2;
  	
  //if(arr.length == 9){
  	a = Number(arr[0]);
  	b = Number(arr[3] + arr[4]);
  	c = Number(arr[7] + arr[8]);
  	D =b*b -4*a*c;
  	if(D > 0){
  		x1 =(-b - Math.sqrt(D)) / (2*a);
  		x2 = (-b + Math.sqrt(D)) / (2*a);
  	} else if(D == 0){
  		x1 = x2 = -b / (2*a);
  	} else {x1 = x2 = null}
  //}
 	  var resolve = [Math.round(x1), Math.round(x2)];
    function compareNumeric(i, j) {
      return i - j;
    }
    resolve.sort(compareNumeric);

  
  return resolve;
  
}
