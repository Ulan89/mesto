const validate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const hasInvalidInput = inputList => inputList.some(inputElement => !inputElement.validity.valid);
///функция на валидность состояния кнопки
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(validate.inactiveButtonClass);
  } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(validate.inactiveButtonClass);
      
  } 
};
///функция показа
const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(validate.errorClass);
  inputElement.classList.add(validate.inputErrorClass);
};
///функция скрытия
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(validate.errorClass);
  inputElement.classList.remove(validate.inputErrorClass);
};

const checkInput = (formElement, inputElement) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement);
  } else {
    showInputError(formElement, inputElement);
  }
};

const setInputListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validate.inputSelector));
  const buttonElement = formElement.querySelector(validate.submitButtonSelector);
    
  inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
          checkInput(formElement, inputElement);
          toggleButtonState(inputList, buttonElement);
      });
      toggleButtonState(inputList, buttonElement);
  });
};
///функция запуска валидации
function enableValidation ({formSelector}) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  
  formList.forEach(formElement => {
      formElement.addEventListener('submit', evt => {
          evt.preventDefault();
        });
          setInputListeners(formElement);
    }
  );
};

enableValidation(validate);

