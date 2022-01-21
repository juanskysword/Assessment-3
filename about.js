console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert("form has been Submitted");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

 function secret (){
	 alert("There are 5 Duckiesss Awesome User")
	 console.log("MouseOver")
 }