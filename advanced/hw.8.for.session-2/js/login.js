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


	initComponent: function () {
		if (this.getUserAuthorized) {
			this.showContent();
		} else {
			this.hideBlock();
			this.login();
		}
	},
	
	validateUserData: function () {
		this.validator.isValid();
	},

	showGallery: function () {
		this.gallery.init();
	}
}