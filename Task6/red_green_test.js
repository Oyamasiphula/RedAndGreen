var rg = new RedOrGreen("mySquare","myColor");

   rg.makeGreen();
// myElements backgound color should be green now
  if (document.getElementById('mySquare').style.backgroundColor === 'green'){
		document.getElementById("mySquare").innerHTML = '<strong>Passed!</strong>' ;
		window.alert("success!");

}else{	document.getElementById('mySquare').style.backgroundColor === 'red';
		document.getElementById("mySquare").innerHTML = 'not passed!' ;
		window.alert("Failure!"); }
   


   rg.makeRed();
   // myElements backgound should be red now
   if (document.getElementById('mySquare').style.backgroundColor === 'red'){
   		document.getElementById("mySquare").innerHTML = '<strong>Not passed!<strong>' ;
		window.alert("Failure!")

	
	}else{	
		window.alert("success!"); }	