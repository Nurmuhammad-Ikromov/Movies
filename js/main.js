var elList = document.querySelector('.js-list');
var elSelect = document.querySelector('.js-select');
let topl = [];

for (item of films) {
	var newItem = document.createElement('li');
	var nameItem = document.createElement('p');
	var idItem = document.createElement('span');
	var textItem = document.createElement('p');
	var time = document.createElement('time');
	var img = document.createElement('img');
	var box = document.createElement('div');
	img.src = `${item.poster}`;

	newItem.setAttribute('class', 'js-item');
	idItem.setAttribute('class', 'js-id');
	nameItem.setAttribute('class', 'js-item-name');
	textItem.setAttribute('class', 'js-item-text');
	time.setAttribute('class', 'js-time');
	img.setAttribute('class', 'js-img');

	var date = new Date(item.release_date * 1000);
	time.textContent = 'Release year: ' + date.getFullYear();

	nameItem.textContent = `${item.title}`;
	idItem.textContent = `Film's id: ${item.id}`;
	textItem.textContent = `About the movie: ${item.overview}`;

	newItem.appendChild(img);
	box.appendChild(idItem);
	box.appendChild(nameItem);
	box.appendChild(time);
	box.appendChild(textItem);
	newItem.appendChild(box);

	var genBox = document.createElement('div');
	var genText = document.createElement('span');
	genText.textContent = 'Genres:';
	genBox.appendChild(genText);
	genBox.setAttribute('class', 'js-genbox');
	genText.setAttribute('class', 'js-genText');
	box.setAttribute('class', 'js-box');

	for (let i = 0; i < item.genres.length; i++) {
		if (item.genres[i] != null) {
			topl.push(item.genres[i]);
		}
	}

	var genr = document.createElement('span');
	genr.textContent = item.genres;
	genr.setAttribute('class', 'js-genre');
	genBox.appendChild(genr);
	box.appendChild(genBox);

	elList.appendChild(newItem);
}

const toplam = [...new Set(topl)];

for (let i = 0; i < toplam.length; i++) {
	var newOption = document.createElement('option');
	newOption.value = toplam[i];
	newOption.textContent = toplam[i];
	newOption.classList.add('js-option');
	elSelect.appendChild(newOption);
}

let result = [];

elSelect.addEventListener('change', function (evt) {
	evt.preventDefault();
	result = [];
	elList.innerHTML = '';
	let val = elSelect.value;
	films.forEach((element) => {
		if (element.genres.includes(val)) {
			result.push(element);
		}
	});

	for (item of result) {
		var newItem = document.createElement('li');
		var nameItem = document.createElement('p');
		var idItem = document.createElement('span');
		var textItem = document.createElement('p');
		var time = document.createElement('time');
		var img = document.createElement('img');
		var box = document.createElement('div');
		img.src = `${item.poster}`;

		newItem.setAttribute('class', 'js-item');
		idItem.setAttribute('class', 'js-id');
		nameItem.setAttribute('class', 'js-item-name');
		textItem.setAttribute('class', 'js-item-text');
		time.setAttribute('class', 'js-time');
		img.setAttribute('class', 'js-img');

		var date = new Date(item.release_date * 1000);
		time.textContent = 'Release year: ' + date.getFullYear();

		nameItem.textContent = `${item.title}`;
		idItem.textContent = `Film's id: ${item.id}`;
		textItem.textContent = `About the movie: ${item.overview}`;

		newItem.appendChild(img);
		box.appendChild(idItem);
		box.appendChild(nameItem);
		box.appendChild(time);
		box.appendChild(textItem);
		newItem.appendChild(box);

		var genBox = document.createElement('div');
		var genText = document.createElement('span');
		genText.textContent = 'Genres:';
		genBox.appendChild(genText);
		genBox.setAttribute('class', 'js-genbox');
		genText.setAttribute('class', 'js-genText');
		box.setAttribute('class', 'js-box');

		box.appendChild(genBox);

		var genr = document.createElement('span');
		genr.textContent = item.genres;
		genr.setAttribute('class', 'js-genre');
		genBox.appendChild(genr);
		box.appendChild(genBox);
		elList.appendChild(newItem);
	}
});
