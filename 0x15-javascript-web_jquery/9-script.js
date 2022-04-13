/* Jquery - $(function () {
	$.get('https://fourtonfish.com/hellosalut/?lang=fr', function (data, txtStatus) {
	  if (txtStatus === 'success') {
		$('DIV#hello').text(data.hello);
	  }
	});
  }); */

  // vanilla

  const url = 'https://fourtonfish.com/hellosalut/?lang=fr';

  const addHello = (hello) => {
	const textNode = document.createTextNode(hello);
	const helloElem = document.querySelector('DIV#hello');
	if (helloElem && textNode) {
	  helloElem.appendChild(textNode);
	}
  };
  
  fetch(url)
	.then((dataRaw) => dataRaw.json())
	.then(({ hello }) => {
	  if (document.readyState === 'ready' || document.readyState === 'complete') {
		addHello(hello);
	  } else {
		window.onload = () => addHello(hello);
	  }
	});
