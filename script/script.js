let popupOpen = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');

function btnClick(evt) {
    popupOpen.classList.add('popup_active');
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent; 
}
editButton.addEventListener('click', btnClick);


function btnRm() {
    popupOpen.classList.remove('popup_active');
}    

popupClose.addEventListener('click', btnRm);


let popupName = document.querySelector('#popup__name');
let popupJob = document.querySelector('#popup__job');
let popupSubmit = document.querySelector('.popup__submit-button');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__job');

function btnSub(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;

    btnRm();
}    

popupSubmit.addEventListener('click', btnSub);
   
    
    
    











  


    












