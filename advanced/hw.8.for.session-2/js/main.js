/* 
*  Схема инициализации приложения
*/

let validatorModule = new Validator();

console.log(validatorModule);

let galleryModule = new BaseGallery();
//let galleryModule = new ExtendedGallery();

let loginForm = new LoginForm(validatorModule, galleryModule);

loginForm.initComponent();