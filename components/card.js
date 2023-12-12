const cardsContainer = document.querySelector(".elements");
const cardsTemplate = document.querySelector("#card__template").content;
const newPictureButton = document.getElementById('newPictureButtonAdd');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


//рендер карточек
const cardsInfo = initialCards.map(function (item) {
    return {
        name: item.name,
        link: item.link
    };
});

function render() {
    cardsInfo.forEach(renderCard);
}
render();
function addPicture() {
}
function renderCard({ name, link }) {
    const placeElement = cardsTemplate
        .querySelector(".elements__element")
        .cloneNode(true);
    placeElement.querySelector(".elements__text").textContent = name;
    placeElement.querySelector(".elements__photo").src = link;
    placeElement.querySelector(".elements__photo").alt = name;

    cardsContainer.prepend(placeElement);
}

newPictureButton.addEventListener('click', (e) => {
    e.preventDefault();

    const newName = document.getElementById('inputTitle').value;
    const newLink = document.getElementById('inputLinkPicture').value;

    const createBlock = document.createElement('article');
    createBlock.className = 'elements__element';
    createBlock.insertAdjacentHTML('beforeend', `
    <button class="elements__thrash" type="submit"></button>
                    <button class="elements__button" type="submit">
                        <img class="elements__photo"  src="${newLink}"  alt="${newName}" />
                    </button>
                    <div class="elements__info">
                    <h2 class="elements__text">${newName}</h2>
                        <button class="elements__like" type="submit">
                        </button>
                    </div>

  `);
    cardsContainer.insertAdjacentElement('afterbegin', createBlock,);
    pictureAddPop.classList.remove('pop-up__all_active');
});
