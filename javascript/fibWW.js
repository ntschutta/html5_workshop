

function callFib(event) {

	var result = fib(input);

}

function fib(n) {
	var s = 0;
	if(n == 0) return(s);
	if(n == 1) {
		s += 1;
		return(s);
	} else {
		return(fib(n - 1) + fib(n - 2));
   }
}
