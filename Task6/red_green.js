function RedOrGreen(div,coloName){
	this.makeGreen = function(){
		document.getElementById('mySquare').style.backgroundColor = 'green';
	};

	this.makeRed = function(){
	document.getElementById('mySquare').style.backgroundColor = 'Red';	

	};
	//document.getElementById(mySquare).style.backgroundColor(div);
};