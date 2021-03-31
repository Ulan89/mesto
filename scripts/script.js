const popupProfileCloseButton = document.querySelector('.popup__close-button_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfileInputName = document.querySelector('#popup__name');
const popupProfileInputJob = document.querySelector('#popup__job');
const popupProfileForm = document.querySelector('#my__form');
const profileTitleName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__job');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const profileAddButton = document.querySelector('#add-button');
const popupAddCardClose = document.querySelector('.popup__close-button_add')
const templateForm = document.querySelector('#template');
const cardsList = document.querySelector('.cards__list');
const popupAddCardForm = document.querySelector('#place-form');
const popupPlaceTitle = document.querySelector('#popup__place-title');
const popupUrlphoto = document.querySelector('#popup__place-url');
const popupSectionPhoto = document.querySelector('.popup_photo');
const popupOutButton = document.querySelector('#popup-out');
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');

function editFunctionHandler() {
    popupProfileInputName.value =  profileTitleName.textContent;
    popupProfileInputJob.value = profileJob.textContent; 
    openPopup(popupEditProfile);
}
         
function submitButtonHandler(evt) {
    evt.preventDefault();
    profileTitleName.textContent = popupProfileInputName.value;
    profileJob.textContent = popupProfileInputJob.value;
    closePopup(popupEditProfile);                 
}   
  
//*********************  domNode Function

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
     const newTarget = createDom({name: popupPlaceTitle.value, link: popupUrlphoto.value});
     cardsList.prepend(newTarget);
     popupAddCardForm.reset();
    
    closePopup(popupAddCard);             
 }

function cardOff(element) {
    element.target.closest('.card').remove();  
}

//***************************popup III Function

function handleCardClick(link, title) {
    popupImage.src = link; 
    popupImage.alt = title; 
    popupText.textContent = title;
    openPopup(popupSectionPhoto);
}


//******************************* Переключение like

function likeCardHandler(evt) {
    evt.target.classList.toggle('card__like_active');
}

//*******************************Закрытие по ESC
const escClose = 'Escape';
const closeEscapeButton = evt => {
 
  if (evt.key === escClose) {
      const popup = document.querySelector('.popup_active');
      closePopup(popup);
  }
};
//******************************** Закрытие по Оверлею
const closeOverlay = evt => {
  if (evt.target.classList.contains('popup')) {
      const popup = document.querySelector('.popup_active');
      closePopup(popup);
  }
};


const openPopup = popupElement => {
  popupElement.classList.add('popup_active');
  document.addEventListener('keydown',  closeEscapeButton);
  document.addEventListener('click', closeOverlay);
  

};

const closePopup = popupElement => {
  popupAddCardForm.reset();
  popupElement.classList.remove('popup_active');
  document.removeEventListener('keydown',  closeEscapeButton);
  document.removeEventListener('click', closeOverlay);
  
};


//******************************** Listeners
profileEditButton.addEventListener('click', () => {
  editFunctionHandler();
  resetValidation(validate);
});
profileAddButton.addEventListener('click', () => {
  resetValidation(validate);
  openPopup(popupAddCard);
  
});  
popupProfileCloseButton.addEventListener('click', () => closePopup(popupEditProfile)); 
popupProfileForm.addEventListener('submit', submitButtonHandler);
popupAddCardClose.addEventListener('click', () => closePopup(popupAddCard)); 
popupAddCardForm.addEventListener('submit',inputGetFunc);
popupOutButton.addEventListener('click', () => closePopup(popupSectionPhoto));




















    











  


    












