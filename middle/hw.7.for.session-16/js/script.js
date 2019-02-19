const loginDafaultData = {
	inputEmail: "artem@mail.com",
	password: "art123"
};

const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
	// e.preventDefault();
	obj.checkData();
});





function AuthModule(loginDafaultData) {

	const inputEmail = document.querySelector('#inputEmail');
	const inputPassword = document.querySelector('#inputPassword');
	const errorMessage = document.querySelector('#alert');
	const formBlock = document.querySelector('#formBlock');
	const about = document.querySelector('#about');
	const showPassword = document.querySelector('#showPassword');
	const showEmail = document.querySelector('#showEmail');
	
	


	this.loginDafaultData = loginDafaultData;

	this.setLocalStorageDafaultData = function () {
		localStorage.setItem('inputEmail', this.loginDafaultData.inputEmail);
		localStorage.setItem('password', this.loginDafaultData.password);
	};


	this.checkData = function () {
		let resulrValidation = validationForm(inputEmail.value, inputPassword.value);
		let resLocalStorageEmail = localStorage.getItem('inputEmail', this.loginDafaultData.inputEmail);
		let resLocalStoragePass = localStorage.getItem('password', this.loginDafaultData.password);

		if (resulrValidation && (resLocalStorageEmail === inputEmail.value) && (resLocalStoragePass === inputPassword.value)) {		
			formBlock.classList.add('hide');
			about.classList.remove('hide');
			showEmail.value = inputEmail.value;
			showPassword.value = inputPassword.value;

			showPassword.type = 'text';
		}
	};



	function validationForm(mail, pass) {
		if (mail.length === 0 || pass.length === 0) {
			errorMessage.classList.remove('hide');
			return false;
		} else {
			errorMessage.classList.add('hide');	
			return true;		
		}
	};


}


const obj = new AuthModule(loginDafaultData);

obj.setLocalStorageDafaultData();

console.log(obj);