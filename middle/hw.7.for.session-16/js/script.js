const loginDafaultData = {
	inputEmail: "artem@mail.com",
	password: "art123"
};

function AuthModule(loginDafaultData) {

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

	function validationForm(mail, pass) {
		if (mail.length === 0 || pass.length === 0) {
			errorMessage.classList.remove('hide');
			return false;
		} else {
			errorMessage.classList.add('hide');
			return true;
		}
	};

	const checkData = () => {
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
	};

	const returnBack = () => {
		about.classList.add('hide');
		formBlock.classList.remove('hide');
	};

	const showPasswordString = () => {
		showPassword.type = showPassword.type === 'password' ? 'text' : 'password';
		showString.innerHTML = showPassword.type === 'password' ? 'Показать пароль' : 'Скрыть пароль';
	};

	this.setLocalStorageDafaultData = function ({inputEmail, password}) {
		localStorage.setItem('inputEmail', inputEmail);
		localStorage.setItem('password', password);
	};

	this.initComponent = function () {
		submit.addEventListener("click", checkData); 
		showString.addEventListener("click", showPasswordString); 
		btnBack.addEventListener("click", returnBack); 
	};
};


const auth = new AuthModule(loginDafaultData);

auth.setLocalStorageDafaultData(loginDafaultData);
auth.initComponent();


console.log(auth);