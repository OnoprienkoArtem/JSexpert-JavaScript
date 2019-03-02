let Validator = function (mail, pass) {

    
    this.mail = mail;
    this.pass = pass;
}

Validator.prototype = {
    isValid: function (mail, pass) {
        if (mail.length === 0 || pass.length === 0) {
            errorMessage.classList.remove('hide');
            return false;
        } else {
            errorMessage.classList.add('hide');
            return true;
        }
    }
}