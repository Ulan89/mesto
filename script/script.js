let popupOpen = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');

editButton.addEventListener('click', function(){
    popupOpen.classList.add('popup_active')
});

popupClose.addEventListener('click', function(){
    popupOpen.classList.remove('popup_active');
})


let popupName = document.querySelector('#popup__name');
let popupJob = document.querySelector('#popup__job');
let popupSubmit = document.querySelector('.popup__submit-button');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__job');
popupName.value += profileName.textContent;
popupJob.value += profileJob.textContent;

popupSubmit.addEventListener('click', function(evt){
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    
    
    
})

let likeBtn = document.querySelectorAll('.card__button');

 for (let i of likeBtn){
     i.addEventListener('click', function(){
         i.classList.toggle('card__button_active');

     })
 }









  


    












