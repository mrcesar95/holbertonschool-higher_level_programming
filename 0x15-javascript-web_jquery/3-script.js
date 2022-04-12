/* Jquery - $('DIV#red_header').click(function() {
	$('header').addClass('red');
});*/

// vanilla
const header = document.querySelector('header');
const clickOn = document.querySelector('DIV#red_header');

clickOn?.addEventListener('click', () => {
	header?.setAttribute('class', 'red');
});
