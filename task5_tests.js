
// change to green
setBackgroundColor('mySquare','green');
// is it green?
if(document.getElementById('mySquare').style.backgroundColor === 'green'){
		window.alert("Success!");

}else {
	document.getElementById('mySquare').style.backgroundColor === 'red';
	window.alert("Failure!");}

// change to red
setBackgroundColor('mySquare','red');
// is it red?
if(document.getElementById('mySquare').style.backgroundColor === 'red'){
		window.alert("Failure!");

}else {
	document.getElementById('mySquare').style.backgroundColor === 'green';
	window.alert("Success!");}

