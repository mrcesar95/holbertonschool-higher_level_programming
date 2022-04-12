/* Jquery - $('DIV#red_header').click(function() {
	$('header').css('color', '#FF0000');
}); */

// vanilla
const clickOn = document.querySelector('DIV#red_header');
const header = document.querySelector('header');

clickOn?.addEventListener('click', () => {
	header?.style.setProperty('color', '#FF0000');
});
