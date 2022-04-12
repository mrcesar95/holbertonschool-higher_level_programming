/* Jquery - $('DIV#add_item').click(function() {
	$('UL.my_list').append('<li>Item</li>');
});*/

// vanilla
const clickOn = document.querySelector('DIV#add_item');
const addList = document.querySelector('UL.my_list');

clickOn?.addEventListener('click', () => {
	const newList = document.createElement('LI');
	const textNode = document.createTextNode('Item');
	if (newList && addList && textNode) {
		newList.appendChild(textNode);
		addList.appendChild(newList);
	}
});
