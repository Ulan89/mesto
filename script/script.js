const popupOpen = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const popupName = document.querySelector('#popup__name');
const popupJob = document.querySelector('#popup__job');
const popupForm = document.querySelector('#my__form');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__job');
const popupEdit = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const addBtn = document.querySelector('#add-button');
const popupDelete = document.querySelector('#popup-close')
const templateForm = document.querySelector('#template');
const cardsList = document.querySelector('.cards__list');
const placeForm = document.querySelector('#place-form');
const inputName = document.querySelector('#popup__place-title');
const inputImg = document.querySelector('#popup__place-url');
const popupPhoto = document.querySelector('.popup_photo');
const popupOutBtn = document.querySelector('#popup-out');
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');

function clickBtn() {
    popupOpen.classList.add('popup_active');
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent; 
}

function rmBtn() {
    popupOpen.classList.remove('popup_active');
}    

function subBtn(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;

    rmBtn();
}   
  
//// popup II function

const openFunc = item => item.classList.add('popup_active');
function switchPopUp() {
    openFunc(popupAddCard);
}

const closeFunc = item => item.classList.remove('popup_active');   
function getPopup() {
    closeFunc(popupAddCard);   
}


// начало добавление картинок Array/массив
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

//// domNode Function

function createDom(item) {
    const newItem = templateForm.content.cloneNode(true);
    const itemName = newItem.querySelector('.card__title');
    const itemImage = newItem.querySelector('.card__image');
    itemImage.src = item.link;
    itemName.textContent = item.name;
    itemName.alt = item.name;
    const likeCardBtn = newItem.querySelector('.card__button');
    const delBtn = newItem.querySelector('.card__delete');
    likeCardBtn.addEventListener('click',likeCardHandler);
    delBtn.addEventListener('click', cardOff);
    itemImage.addEventListener('click', () => handleCardClick(item.link, item.name));
    return newItem;  

}

function renderList() {
    const result = initialCards.map(function (item) {
      const newCard = createDom(item);
      return newCard;
    });
  cardsList.append(...result);   
}
renderList();

 function inputGetFunc(evt) {
     evt.preventDefault();
     const newTarget = createDom({name: inputName.value, link: inputImg.value});
     cardsList.prepend(newTarget);
     inputName.value ='';
     inputImg.value = ''; 
     closeFunc(popupAddCard);
         
 }

function cardOff(element) {
    element.target.closest('.card').remove();  
}

////popup III Function

function handleCardClick(link, title) {
    popupImage.src = link; 
    popupImage.alt = title; 
    popupText.textContent = title;
    openFunc(popupPhoto);
}


/// like function

function likeCardHandler(evt) {
    evt.target.classList.toggle('card__like_active');
}


popupClose.addEventListener('click', rmBtn); 
editButton.addEventListener('click', clickBtn);
popupForm.addEventListener('submit', subBtn);
addBtn.addEventListener('click', switchPopUp);  
popupDelete.addEventListener('click',getPopup); 
placeForm.addEventListener('submit',inputGetFunc);
popupOutBtn.addEventListener('click',() => closeFunc(popupPhoto));




















    











  


    












