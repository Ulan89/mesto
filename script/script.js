const popupEdit = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const popupEditInputName = document.querySelector('#popup__name');
const popupEditInputJob = document.querySelector('#popup__job');
const popupForm = document.querySelector('#my__form');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__job');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const profileAddButton = document.querySelector('#add-button');
const popupDelete = document.querySelector('#popup-close')
const templateForm = document.querySelector('#template');
const cardsList = document.querySelector('.cards__list');
const placeForm = document.querySelector('#place-form');
const inputTitleName = document.querySelector('#popup__place-title');
const popupPlaceUrl = document.querySelector('#popup__place-url');
const popupPhoto = document.querySelector('.popup_photo');
const popupOutButton = document.querySelector('#popup-out');
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');

function editFunctionHandler() {
    popupEditInputName.value = profileName.textContent;
    popupEditInputJob.value = profileJob.textContent; 
    openPopup(popupEditProfile);
}
         
function submitButtonHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupEditInputName.value;
    profileJob.textContent = popupEditInputJob.value;
    closePopup(popupEdit);                 
}   
  
//*************** domNode Function

function createDom(item) {
    const newItem = templateForm.content.cloneNode(true);
    const itemName = newItem.querySelector('.card__title');
    const itemImage = newItem.querySelector('.card__image');
    itemImage.src = item.link;
    itemName.textContent = item.name;
    itemImage.alt = item.name;
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
     const newTarget = createDom({name: inputTitleName.value, link: popupPlaceUrl.value});
     cardsList.prepend(newTarget);
     placeForm.reset();
     closePopup(popupAddCard);             
 }

function cardOff(element) {
    element.target.closest('.card').remove();  
}

//*********************popup III Function

function handleCardClick(link, title) {
    popupImage.src = link; 
    popupImage.alt = title; 
    popupText.textContent = title;
    openPopup(popupPhoto);
}

//**********************like function

function likeCardHandler(evt) {
    evt.target.classList.toggle('card__like_active');
}


















//********************** Закрытия по ESC и Оверлею
// const escCode = 'Escape';

// function closeEscapeButton(evt) {
//   if (evt.key === escCode) {
//     const openedPopup = document.querySelector('popup_active');
//     closePopup(openedPopup); 
//   }
// }

// const closeOverlay = (evt) => { 
// if (evt.target.classList.contains('popup_active')) { 
//   const openedPopup = document.querySelector('popup_active');
//   closePopup(evt.target); 
// } 
// }







//*********************************Listeners

// popupCloseButton.addEventListener('click', () => closePopup(popupEdit)); 
// editButton.addEventListener('click', editFunctionHandler);
// popupForm.addEventListener('submit', submitButtonHandler);
// profileAddButton.addEventListener('click', () => openPopup(popupAddCard));  
// popupDelete.addEventListener('click', () => closePopup(popupAddCard)); 
// placeForm.addEventListener('submit',inputGetFunc);
// popupOutButton.addEventListener('click', () => closePopup(popupPhoto));

















    











  


    












