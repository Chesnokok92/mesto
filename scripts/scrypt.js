
const likeButton = document.querySelectorAll('.elements__like');
const popup = document.querySelector('.pop-up__all');
const popupPicture = document.getElementById('pictureAddPop');
const openPopupButtons = document.getElementById('profile');
const closePopupButtons = document.querySelector('.pop-up__button-close');
const openPopupAddPicture = document.getElementById('pictureAdd');
const nameText = document.querySelector('.profile__name').textContent;
const infoText = document.querySelector('.profile__about').textContent;
const inputTitle = document.getElementById('inputTitle').textContent;
const inputLinkPicture = document.getElementById('inputLinkPicture').textContent;
const nameInput = document.querySelector('#inputName');
const jobInput = document.querySelector('#inputInfo');
const formElement = document.querySelector('.pop-up');


openPopupButtons.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('pop-up__all_active');
    document.getElementById('inputName').value = nameText;
    document.getElementById('inputInfo').value = infoText;
})

closePopupButtons.addEventListener('click', (e) => {
    popup.classList.remove('pop-up__all_active');
    e.preventDefault();
})

openPopupAddPicture.addEventListener('click', (e) => {
    e.preventDefault();
    pictureAddPop.classList.add('pop-up__all_active');
    document.getElementById('inputTitle').value = inputTitle;
    document.getElementById('inputLinkPicture').value = inputLinkPicture;
})

likeButton.forEach(likeButton => {
    likeButton.addEventListener('click', () => likeButton.classList.toggle('elements__like_active'));
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    const newName = document.getElementById("inputName").value;
    const newInfo = document.getElementById("inputInfo").value;
    let updateName = document.querySelector('.profile__name');
    let updateInfo = document.querySelector('.profile__about');
    updateName.textContent = newName;
    updateInfo.textContent = newInfo;
};
formElement.addEventListener('submit', handleFormSubmit); 