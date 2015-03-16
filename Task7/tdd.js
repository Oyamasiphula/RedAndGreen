var passed = 0;
var failed = 0;
var total = 0 ;


var assert = { 
	equals: function(expectedResult,returnResult){

	total = passed+failed;

	var newElement = document.createElement('div');
	newElement.id = "mySquare"+total;
	document.body.appendChild(newElement);
	//document.getElementById().appendChild(newElement);

	var myDiv = new RedOrGreen(newElement.id);

	if(expectedResult === returnResult){
			passed++; 
			myDiv.makeGreen();
	}else {
			failed++;
			myDiv.makeRed();
	}

	total = passed+failed;
	document.getElementById(newElement.id).innerHTML = 'passed:'+passed+' failed:'+failed+' total test:'+total;

}

	};

	var TestMyCode = {
	run:function(testfunction,functionreturn){
	functionreturn(assert);

}

	};