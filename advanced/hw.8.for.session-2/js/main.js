/* 
*  Схема инициализации приложения
*/
const inputEmail = document.querySelector('#inputEmail').value;
const inputPassword = document.querySelector('#inputPassword').value;


let validatorModule = new Validator(inputEmail, inputPassword);

console.log(validatorModule);

let galleryModule = new BaseGallery();
//let galleryModule = new ExtendedGallery();

let loginForm = new LoginForm(validatorModule, galleryModule);

loginForm.initComponent();