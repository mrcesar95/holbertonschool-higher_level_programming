/* Jquery - $('DIV#update_header').click(function () {
	$('header').text('New Header!!!');
});*/

// vanilla

const clickOn = document.querySelector('DIV#update_header');
const header = document.querySelector('header');

clickOn?.addEventListener('click', () => {
	const textNode = document.createTextNode('New Header!!!');
	if (header && textNode) {
		[...header.childNodes].pop()?.remove();
		header.appendChild(textNode);
	}
})
