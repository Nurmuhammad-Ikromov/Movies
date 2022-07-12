var elList = document.querySelector('.js-list');
var elSelect = document.querySelector('.js-select');

const elModalImg = document.querySelector('.modal-img');
const elModal = document.querySelector('.modal');
const elModalItemTitle = document.querySelector('.modal-item-title');
const elModalItemDay = document.querySelector('.modal-day');
const elModalItemGenre = document.querySelector('.modal-item-genre');
const elModalItemText = document.querySelector('.modal-item-text');
const elCloseBtn = document.querySelector('.close');
const elBookmarkList = document.querySelector('.js-bookmark');
const elBookmarkTitle = document.querySelector('js-mark-title')
let topl = [];
let bookmarkList = []





elList.addEventListener("click", function(evt){
	if (evt.target.matches('.modal-btn')){
		var modalId = evt.target.dataset.modId;
		
		var findItem = films.find((el) => el.id == modalId);
		
		elModalImg.src = findItem.poster;
		elModalItemTitle.textContent = findItem.title;
		elModalItemText.textContent = findItem.overview;
		elModalItemGenre.textContent = 'Genres: ' + findItem.genres;
		var date = new Date(findItem.release_date * 1000);
		elModalItemDay.textContent ='Release year: ' + date.getFullYear();;
	
		createItem(films, elList)
	}


	if (evt.target.matches(".mark-btn")){
		var markId = evt.target.dataset.modId;
		var findObj = films.find((el) => el.id == markId);
		var markItem = ""
		
		var elMarkItem = document.createElement('li')
		markItem = findObj.title;
		bookmarkList.push(markItem);
		window.localStorage.setItem("bookmark", JSON.stringify(bookmarkList))
		var localList = JSON.parse(window.localStorage.getItem("bookmark"))
		localList.forEach((el)=>{
			elMarkItem.textContent = el
			elMarkItem.setAttribute('class', "mark-item")
		});
		elBookmarkList.appendChild(elMarkItem);
		createItem(films, elList)

	}

})

const createItem = function (array, list) {
	array.forEach((item) => {
		var newItem = document.createElement('li');
		var nameItem = document.createElement('p');
		var idItem = document.createElement('span');
		var textItem = document.createElement('p');
		var time = document.createElement('time');
		var img = document.createElement('img');
		var box = document.createElement('div');
		var modalBtn = document.createElement('button');
		var mark = document.createElement('button');

		mark.dataset.modId = item.id;
		modalBtn.dataset.modId = item.id;
		newItem.dataset.modId = item.id;
		elModalItemTitle.dataset.modId = item.id
		elModalItemText.dataset.modId = item.id
		elModalItemGenre.dataset.modId = item.id
		elModalItemDay.dataset.modId = item.id
		
		newItem.setAttribute('class', 'js-item');
		idItem.setAttribute('class', 'js-id');
		nameItem.setAttribute('class', 'js-item-name');
		textItem.setAttribute('class', 'js-item-text');
		modalBtn.setAttribute('class', 'modal-btn');
		mark.setAttribute('class', 'mark-btn');
		time.setAttribute('class', 'js-time');
		img.setAttribute('class', 'js-img');
		
		var date = new Date(item.release_date * 1000);
		time.textContent = 'Release year: ' + date.getFullYear();
		
		img.src = `${item.poster}`;
		nameItem.textContent = `${item.title}`;
		idItem.textContent = `Film's id: ${item.id}`;
		textItem.textContent = `About the movie: ${item.overview}`;
		modalBtn.textContent = 'More';
		mark.textContent = 'Save'
		newItem.appendChild(img);
		box.appendChild(idItem);
		box.appendChild(nameItem);
		box.appendChild(time);
		// box.appendChild(textItem);
		newItem.appendChild(box);
		
		var genBox = document.createElement('div');
		var genText = document.createElement('span');
		genText.textContent = 'Genres:';
		genBox.appendChild(genText);
		genBox.setAttribute('class', 'js-genbox');
		genText.setAttribute('class', 'js-genText');
		box.setAttribute('class', 'js-box');

	

		item.genres.forEach((el) => {
			topl.push(el)
		})

		var genr = document.createElement('span');
		genr.textContent = item.genres;
		genr.setAttribute('class', 'js-genre');
		genBox.appendChild(genr);
		box.appendChild(genBox);

		box.appendChild(modalBtn);
		box.appendChild(mark);
		list.appendChild(newItem);

		modalBtn.onclick = function () {
			elModal.style.display = 'block';
		};

		elCloseBtn.onclick = function () {
			elModal.style.display = 'none';
		};

		window.onclick = function(evt){
			if(evt.target.matches('.modal')){
				elModal.style.display = 'none';
			}
		}
	});
};

createItem(films, elList)

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


	createItem(result,elList)
});

localList = JSON.parse(window.localStorage.getItem("bookmark"))
console.log(localList);

localList.forEach((el)=>{
	var elMarkItem = document.createElement('li')
	elMarkItem.setAttribute('class', "mark-item")
	elMarkItem.textContent = el
	elBookmarkList.appendChild(elMarkItem)
});







