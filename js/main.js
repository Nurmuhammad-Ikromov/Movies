var elList = document.querySelector('.js-list');

let res = [];

for (item of films) {
	var newItem = document.createElement('li');
	var nameItem = document.createElement('p');
	var idItem = document.createElement('span');
	var textItem = document.createElement('p');
	var time = document.createElement('time');
	var img = document.createElement('img');
    var box = document.createElement('div')
	img.src = `${item.poster}`;

	newItem.setAttribute('class', 'js-item');
	idItem.setAttribute('class', 'js-id');
	nameItem.setAttribute('class', 'js-item-name');
	textItem.setAttribute('class', 'js-item-text');
	time.setAttribute('class', 'js-time');
	img.setAttribute('class', 'js-img');

	var date = new Date(item.release_date * 1000);
	time.textContent ="Release year: " + date.getFullYear();

	nameItem.textContent = `${item.title}`;
	idItem.textContent = `Film's id: ${item.id}`;
	textItem.textContent = `About the movie: ${item.overview}`;

	newItem.appendChild(img);
	box.appendChild(idItem);
	box.appendChild(nameItem);
	box.appendChild(time);
	box.appendChild(textItem);
    newItem.appendChild(box)

    var genBox =document.createElement('div')
    var genText = document.createElement('span')
    genText.textContent = "Genres:"
    genBox.appendChild(genText)
    genBox.setAttribute('class', 'js-genbox')
    genText.setAttribute('class', 'js-genText')
    box.setAttribute('class', 'js-box')


	for (let i = 0; i < item.genres.length; i++) {
		if (item.genres[i] != null) {
			res.push(item.genres[i]);
			var genr = document.createElement('span');
			genr.textContent = res[i];
			genr.setAttribute('class', 'js-genre');
			genBox.appendChild(genr);

		}
	}
            box.appendChild(genBox)



	elList.appendChild(newItem);
}

// console.log(date.getFullYear());
