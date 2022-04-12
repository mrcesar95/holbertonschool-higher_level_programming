/*Jquery - $('DIV#toggle_header').click(function() {
	$('header').toggleClass('green red');
});*/

// vanilla
const header = document.querySelector('header');
const clickOn = document.querySelector('DIV#toggle_header');

clickOn?.addEventListener('click', () => {
	header?.classList.toggle('green');
	header?.classList.toggle('red');
});
