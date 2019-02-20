const loginDafaultData = {
	inputEmail: "artem@mail.com",
	password: "art123"
};

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => auth.checkData());

const showString = document.querySelector('#showString');
showString.addEventListener('click', () => auth.showPasswordString());

const btnBack = document.querySelector('#btnBack');
btnBack.addEventListener('click', () => auth.returnBack());


function AuthModule(loginDafaultData) {

	const inputEmail = document.querySelector('#inputEmail');
	const inputPassword = document.querySelector('#inputPassword');
	const errorMessage = document.querySelector('#alert');
	const formBlock = document.querySelector('#formBlock');
	const about = document.querySelector('#about');
	const showPassword = document.querySelector('#showPassword');
	const showEmail = document.querySelector('#showEmail');	

	(function setLocalStorageDafaultData() {
		localStorage.setItem('inputEmail', loginDafaultData.inputEmail);
		localStorage.setItem('password', loginDafaultData.password);
	})();

	function validationForm(mail, pass) {
		if (mail.length === 0 || pass.length === 0) {
			errorMessage.classList.remove('hide');
			return false;
		} else {
			errorMessage.classList.add('hide');
			return true;
		}
	};

	this.checkData = function () {
		let resulrValidation = validationForm(inputEmail.value, inputPassword.value);
		let resLocalStorageEmail = localStorage.getItem('inputEmail', loginDafaultData.inputEmail);
		let resLocalStoragePass = localStorage.getItem('password', loginDafaultData.password);
		
		if (resulrValidation && (resLocalStorageEmail === inputEmail.value) && (resLocalStoragePass === inputPassword.value)) {
			formBlock.classList.add('hide');
			about.classList.remove('hide');
			showEmail.value = inputEmail.value;
			showPassword.value = inputPassword.value;		
		}		
	};

	this.showPasswordString = function () {
		showPassword.type = (showPassword.type === 'password') ? 'text' : 'password';
		showString.innerHTML = (showPassword.type === 'password') ? 'Показать пароль' : 'Скрыть пароль';
		
	};

	this.returnBack = function() {
		about.classList.add('hide');
		formBlock.classList.remove('hide');
	};
};


const auth = new AuthModule(loginDafaultData);



console.log(auth);