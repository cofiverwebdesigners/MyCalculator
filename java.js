/*  let me  get the screen  of my calculator */
console.log("mystudent");
screen=document.getElementById("my_screen");

//let me sprecify a function that  will let me add a number to the screen

function clearscreen(){
	console.log("wathi");
	screen.value ='';
	
}



// let me  add a function that  will be erasing all the content  ffrom the 
//calculator
function addtoscreen(input){
	screen.value+=input;
}


//another Function to delete the recently entered records 
function DelRec(){
	screen.value=screen.value.toString().slice(0,-1)
	
}

//let me add another function to do the mathematical computation 
function calculate(){
	try{
		screen.value=eval(screen.value)
	}
	catch{
		screen.value="Error"
	}
	
	
}