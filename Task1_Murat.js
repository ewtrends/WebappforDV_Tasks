
let x = prompt('Value of Integration starting point');

function integral(x){
		
	let n = 4; 
	let delta_x = 2 / n;
	
	let result = delta_x*((x**2 - Math.cos(x)) + ((x+delta_x)**2 - Math.cos(x+delta_x)) +
	            ((x+2*delta_x)**2 - Math.cos(x+2*delta_x)) + ((x+3*delta_x)**2 - Math.cos(x+3*delta_x)));
	return result;
};

alert(integral(x));