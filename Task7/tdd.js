var passed = 0;
var failed = 0;
var total = 0 ;
var allTests = 0

var assert = { 
	equals: function(expectedResult,returnResult){

	total = passed+failed;

	var newElement = document.createElement('div');
	newElement.id = "mySquare"+total;
	document.body.appendChild(newElement);
	var myDiv = new RedOrGreen(newElement.id);

	if(expectedResult === returnResult){
			passed++; 
			myDiv.makeGreen();
		//*To show that the reults are the same as expected then it should pass!!! //*
			document.write('<strong>Expected Results: </strong>'+returnResult+"</br>"+'<strong>Results: </strong>'+ expectedResult+'<br></br>');


	}else {
			failed++;
			myDiv.makeRed();
		//*To point where the problem is giving the difference*//
			document.write('<strong>Expected Results: </strong>'+returnResult+"</br>"+'<strong>Results: </strong>'+ expectedResult+'<strong><em> <== Error </em>!</strong>'+'<br></br>');


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
