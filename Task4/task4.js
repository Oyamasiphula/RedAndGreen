	var operation = true;
var myBtn = document.getElementById('myButn');
myBtn.addEventListener('click',
function (){

if(operation === true){
myBtn.value = 'Make green';
document.getElementById('boxed2').style.backgroundColor = 'red';
		operation = false;
} 

else {
myBtn.value ='Make red';
document.getElementById('boxed2').style.backgroundColor = 'green';
		operation = true; 
}; 

})

