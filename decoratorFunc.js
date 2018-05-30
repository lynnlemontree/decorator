//If we have a cpu insentive job we want cache the result so we won't waste the cpu

function hardJob(x){
    //suppose this is time-cosuming
    return x;
}

//so next we want cache the result , so for same x, we get same result.
function decoratorFunc(func){
    let result = new Map();
    //start decorate!!
    return function(x){
	if (result.has(x)){
	    return result.get(x);
	}
	let value = func(x);
	result.set(x,value);
	return result;
    }
}
let decoratedFunc = decoratorFunc(hardJob)
console.log(decoratedFunc(1))
