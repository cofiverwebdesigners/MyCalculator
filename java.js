/*  let me  get the screen  of my calculator */
screen=document.getElementById("my_screen");

//let me sprecify a function that  will let me add a number to the screen

function clearscreen(){
	screen.value ='';
	
	
}


// let me  add a function that  will be erasing all the content  ffrom the 
//calculator
function addtoscreen(input){
	s_v=screen.value
	if (s_v==="No, Operands"|| s_v==="An Error Ocurred!"||s_v===''){
		screen.value ='';
		screen.style.color="black"
		screen.style.fontSize="50px";
	}
		
	screen.value+=input;
}


//another Function to delete the recently entered records 
function DelRec(){
	screen.value=screen.value.toString().slice(0,-1)
	
}

//let me add another function to do the mathematical computation 

function calculate(){
	screen.style.color="black"
	screen.style.fontSize="50px";
	sc=document.getElementById("my_screen");
	screen_value=sc.value
	if ( screen_value.trim()===''){
		screen.value="No, Operands"
		screen.style.fontSize="30px";
		screen.style.color="red"
	}
	else{
	
	try{
		screen.value=eval(screen.value)
	}
	catch{
		screen.value="An Error Ocurred!"
		screen.style.fontSize="30px";
		screen.style.color="red"
	}
	}
	
}


//when calculate buttonm is clicked, let me have the following  working 
calc=document.getElementById("equals");
calc.addEventListener("click",calculate)

//when the AC  function is clicked, let me clear the content  in the screen 
AC=document.getElementById("AC");
AC.addEventListener("click",clearscreen)


//A function to delete  the recently entered  value 
DE=document.getElementById("DE");
DE.addEventListener("click",DelRec)


//when each of the Buttonn is clicked  it should show up in the screen. 
fullstop=document.getElementById(".");
full=fullstop.value
fullstop.addEventListener("click",function(){
addtoscreen(full)})

devide=document.getElementById("/")
de=devide.value
devide.addEventListener("click",function(){
addtoscreen(de)})



a7=document.getElementById("7")
a77=a7.value
a7.addEventListener("click",function(){
addtoscreen(a77)})


a8=document.getElementById("8")
a88=a8.value
a8.addEventListener("click",function(){
addtoscreen(a88)})



a9=document.getElementById("9")
a99=a9.value
a9.addEventListener("click",function(){
addtoscreen(a99)})

a4=document.getElementById("4")
a44=a4.value
a4.addEventListener("click",function(){
addtoscreen(a44)})


a5=document.getElementById("5")
a55=a5.value
a5.addEventListener("click",function(){
addtoscreen(a55)})

a6=document.getElementById("6")
a66=a6.value
a6.addEventListener("click",function(){
addtoscreen(a66)})

a1=document.getElementById("1")
a11=a1.value
a1.addEventListener("click",function(){
addtoscreen(a11)})


a2=document.getElementById("2")
a22=a2.value
a2.addEventListener("click",function(){
addtoscreen(a22)})

a3=document.getElementById("3")
a33=a3.value
a3.addEventListener("click",function(){
addtoscreen(a33)})

a00=document.getElementById("00")
a000=a00.value
a00.addEventListener("click",function(){
addtoscreen(a000)})

a0=document.getElementById("0")
a50=a0.value
a0.addEventListener("click",function(){
addtoscreen(a50)})


adi=document.getElementById("addittion")
ad2=adi.value
adi.addEventListener("click",function(){
addtoscreen(ad2)})

sub=document.getElementById("sub")
sub2=sub.value
sub.addEventListener("click",function(){
addtoscreen(sub2)})

m=document.getElementById("multi")
m2=m.value
m.addEventListener("click",function(){
addtoscreen(m2)})






//The Decreament and Increament Operators... 
//The Increament Operator, increaments  by one 

function increament(){
	//let me get whatever is in my User's Screen First.
	current_value=parseInt(screen.value);
	screen.value=current_value+1
}

//Using function Increament. 

increament_operator=document.getElementById("increament")
increament_operator.addEventListener("click",function(){
increament()})

//Decreament Operator. 
function decreament(){
	//let me get whatever is in my User's Screen First.
	current_value=parseInt(screen.value);
	screen.value=current_value-1
}

//using Decreament Operatot Now. 
decreament_operator=document.getElementById("decreament")
decreament_operator.addEventListener("click",function(){
decreament()})



//let me enable that   modulus  operation to work now. 


modulus=document.getElementById("modulus")
modulus2=modulus.value
modulus.addEventListener("click",function(){
addtoscreen(modulus2)})
