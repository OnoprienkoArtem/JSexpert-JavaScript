const loginDafaultData = {
	userName: "artem@mail.com",
	password: "art123"
};

function AuthModule(loginDafaultData) {
	this.loginDafaultData = loginDafaultData;

	this.setLocalStorageDafaultData = function () {
		localStorage.setItem('userName', loginDafaultData.userName);
		localStorage.setItem('password', loginDafaultData.password);
	};
}

const obj = new AuthModule(loginDafaultData);

obj.setLocalStorageDafaultData();

console.log(obj);