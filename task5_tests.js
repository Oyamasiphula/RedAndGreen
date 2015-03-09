// change to red
setBackgroundColor('mySquare','red');
// is it red?
if(document.getElementById('mySquare').style.backgroundColor === 'red'){
alert("Failure!");

}else if(document.getElementById('mySquare').style.backgroundColor === 'green'){
	alert("Success!");
}else {

	alert("null is not a color!");
}

setBackgroundColor('mySquare','green');

