/* Jquery - $.get('https://swapi-api.hbtn.io/api/films/?format=json', function (data, textStatus) {
  if (textStatus === 'success') {
    for (const result of data.results) {
      $('UL#list_movies').append(`<li>${result.title}</li>`);
    }
  }
}); */

// vanilla

const listToAdd = document.querySelector('UL#list_movies');
const url = 'https://swapi-api.hbtn.io/api/films/?format=json';

fetch(url)
  .then((dataRaw) => dataRaw.json())
  .then(({ results }) => results?.forEach(({ title }) => {
    const newList = document.createElement('LI');
    const textNode = document.createTextNode(title);
    if (newList && listToAdd && textNode) {
      newList.appendChild(textNode);
      listToAdd.appendChild(newList);
    }
  }));
