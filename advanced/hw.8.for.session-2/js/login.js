const loginDafaultData = {
	inputEmail: "artem@mail.com",
	password: "art123"
};



let LoginForm = function (validatorModule, galleryModule) {
	this.validator = validatorModule;
	this.gallery = galleryModule;

	const inputEmail = document.querySelector('#inputEmail');
	const inputPassword = document.querySelector('#inputPassword');
	const errorMessage = document.querySelector('#alert');
	const formBlock = document.querySelector('#formBlock');
	const about = document.querySelector('#about');
	const showPassword = document.querySelector('#showPassword');
	const showEmail = document.querySelector('#showEmail');
		const submit = document.querySelector('#submit');
		const showString = document.querySelector('#showString');
	const btnBack = document.querySelector('#btnBack');
}

LoginForm.prototype = {

	validationForm: function (mail, pass) {
		if (mail.length === 0 || pass.length === 0) {
			errorMessage.classList.remove('hide');
			return false;
		} else {
			errorMessage.classList.add('hide');
			return true;
		}
	},

	checkData: function () {
		const email = inputEmail.value.trim();
		const pass = inputPassword.value.trim();

		const resultValidation = validationForm(email, pass);
		const resLocalStorageEmail = localStorage.getItem("inputEmail");
		const resLocalStoragePass = localStorage.getItem("password");

		if (resultValidation && resLocalStorageEmail === email && resLocalStoragePass === pass) {
			formBlock.classList.add("hide");
			about.classList.remove("hide");
			showEmail.value = email;
			showPassword.value = pass;
		}
	},

	returnBack: function () {
		about.classList.add('hide');
		formBlock.classList.remove('hide');
	},

	showPasswordString: function () {
		showPassword.type = showPassword.type === 'password' ? 'text' : 'password';
		showString.innerHTML = showPassword.type === 'password' ? 'Показать пароль' : 'Скрыть пароль';
	},


	setLocalStorageDafaultData: function ({ inputEmail, password }) {
		localStorage.setItem('inputEmail', inputEmail);
		localStorage.setItem('password', password);
	},

	initComponent: function () {
		submit.addEventListener("click", this.checkData);
		showString.addEventListener("click", this.showPasswordString);
		btnBack.addEventListener("click", this.returnBack);
	},


	// initComponent: function () {
	// 	if (this.getUserAuthorized) {
	// 		this.showContent();
	// 	} else {
	// 		this.hideBlock();
	// 		this.login();
	// 	}
	// },
	
	// validateUserData: function () {
	// 	this.validator.isValid();
	// },

	// showGallery: function () {
	// 	this.gallery.init();
	// }
}