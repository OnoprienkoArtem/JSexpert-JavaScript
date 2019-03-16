const loginDafaultData = {
	inputEmail: "artem@mail.com",
	password: "art123"
};



let LoginForm = function (validatorModule, loginDafaultData, galleryModule) {
	this.loginDafaultData = loginDafaultData;
	this.validator = validatorModule;

	// this.gallery = galleryModule;
	
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


	checkData: function () {
		const email = this.inputEmail.value.trim();
		const pass = this.inputPassword.value.trim();		

		const resultValidation = this.validator.isValid(email, pass, this.errorMessage);		

		if (resultValidation) {			
			this.setLocalStorageDafaultData(email, pass);
		}

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


	setLocalStorageDafaultData: function (inputEmail, password) {
		localStorage.setItem('inputEmail', inputEmail);
		localStorage.setItem('password', password);
	},

	initComponent: function () {
		submit.addEventListener("click", () => {
			this.checkData();
		});
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