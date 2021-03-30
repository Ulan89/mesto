const validate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const hasInvalidInput = inputList => inputList.some(inputElement => !inputElement.validity.valid);

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList, validate)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(validate.inactiveButtonClass);
  } else {
      buttonElement.classList.remove(validate.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
  }
};

const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(validate.errorClass);
  inputElement.classList.add(validate.inputErrorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(validate.errorClass);
  inputElement.classList.remove(validate.inputErrorClass);
};

const checkInput = (formElement, inputElement) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, validate);
  } else {
    showInputError(formElement, inputElement, validate);
  }
};

const setInputListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validate.inputSelector));
  const buttonElement = formElement.querySelector(validate.submitButtonSelector);
    
  inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
          checkInput(formElement, inputElement, validate);
          toggleButtonState(inputList, buttonElement, validate);
      });
      toggleButtonState(inputList, buttonElement, validate);
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validate.formSelector));
  
  formList.forEach(formElement => {
      formElement.addEventListener('submit', evt => {
          evt.preventDefault();
        });
          setInputListeners(formElement, validate);
    }
  );
};

enableValidation(validate);


// const clearValidation = (validate) => {
//   const formList = Array.from(document.querySelectorAll(validate.formSelector));
//   formList.forEach(formElement => {
//       const inputList = Array.from(formElement.querySelectorAll(validate.inputSelector));
//       inputList.forEach(inputElement => {
//           hideInputError(formElement, inputElement, validate);
//       });
//       const buttonElement = formElement.querySelector(validate.submitButtonSelector);
//       toggleButtonState(inputList, buttonElement, validate);
//   });
// };



