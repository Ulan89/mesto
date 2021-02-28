let popupOpen = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');
let popupName = document.querySelector('#popup__name');
let popupJob = document.querySelector('#popup__job');
let popupForm = document.querySelector('#my__form');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__job');

function clickBtn(evt) {
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

popupClose.addEventListener('click', rmBtn); 
editButton.addEventListener('click', clickBtn);
popupForm.addEventListener('submit', subBtn);
   
    
    
    











  


    












