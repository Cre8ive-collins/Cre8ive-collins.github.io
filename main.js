$(document).ready(function(){
	 
	let text = ['A WEB DEVELOPER','MOTIVATED', 'PASSIONATE', 'TALENTED', 'DEDICATED', 'CRE8IVE'];
    let count = 0;
    let index = 0;
    let currentText = 0;
    let letter = 0;
    (function type(){
    	if (count === text.length){
    		count = 0;
    	}
    	currentText = text[count];
    	letter = currentText.slice(0);
    	    	
    	document.querySelector('.typing').textContent = letter;
    	if (letter.length === currentText.length){
    		count++;
    		index = 0;
    	}
    setTimeout(type , 1500)}())

});