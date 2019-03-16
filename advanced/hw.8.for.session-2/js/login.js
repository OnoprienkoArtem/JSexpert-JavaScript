const loginDafaultData = {
	inputEmail: "artem@mail.com",
	password: "art123"
};



let LoginForm = function (validatorModule, galleryModule) {

	this.validator = validatorModule;

	this.galleryModule = galleryModule;

	this.gallery = document.querySelector('#gallery');

	this.errorMessage = document.querySelector('#alert');
	this.formBlock = document.querySelector('#formBlock');
	this.about = document.querySelector('#about');
	this.showPassword = document.querySelector('#showPassword');
	this.showEmail = document.querySelector('#showEmail');
	this.btnBack = document.querySelector('#btnBack');
	this.showString = document.querySelector('#showString');
	this.submit = document.querySelector('#submit');
	this.inputEmail = document.querySelector('#inputEmail');
	this.inputPassword = document.querySelector('#inputPassword');

}

LoginForm.prototype = {

	validateData: function (email, pass) {

		const resultValidation = this.validator.isValid(email, pass);

		if (!resultValidation.status) {
			showError(resultValidation.msg);
			return false;
		}
		return true;
	},

	logIn: function (email, pass) {
		const resLocalStorageEmail = localStorage.getItem("inputEmail");
		const resLocalStoragePass = localStorage.getItem("password");
		if (resLocalStorageEmail === email && resLocalStoragePass === pass) {
			return true;
		}
		showError('login fail');
		return false;
	},

	showError: function (msg) {
		this.errorMessage.classList.remove('hide');
		this.errorMessage.innerText = resultValidation.msg;
		setTimeout(() => {
			this.errorMessage.classList.add('hide');
		}, 2000)
	},

	returnBack: function () {
		about.classList.add('hide');
		formBlock.classList.remove('hide');
	},

	showPasswordString: function () {
		showPassword.type = showPassword.type === 'password' ? 'text' : 'password';
		showString.innerHTML = showPassword.type === 'password' ? 'Показать пароль' : 'Скрыть пароль';
	},


	setLocalStorageDafaultData: function ({
		inputEmail,
		password
	}) {
		localStorage.setItem('inputEmail', inputEmail);
		localStorage.setItem('password', password);
	},

	initComponent: function () {
		this.setLocalStorageDafaultData(loginDafaultData);
		submit.addEventListener("click", logInHandler);
		showString.addEventListener("click", this.showPasswordString);
		btnBack.addEventListener("click", this.returnBack);
	},

	logInHandler: () => {
		const email = this.inputEmail.value.trim();
		const pass = this.inputPassword.value.trim();
		const validateStatus = this.validateData(email, pass);
		let loginStatus;
		if (validateStatus) {
			loginStatus = this.logIn(email, pass);
		}
		if (loginStatus) {
			this.galleryModule.init();
			renderGalleryPage();
			// this.navMenu();
			// renderNavMenu();
		}
	},

	renderGalleryPage: function () {
		this.formBlock.classList.add('hide');
		this.gallery.classList.remove('hide');
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