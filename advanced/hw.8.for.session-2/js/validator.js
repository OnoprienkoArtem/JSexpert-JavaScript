let Validator = function () {    
  
}

Validator.prototype = {
    isValid: function (mail, pass, errorMessage) {         
        if (mail.length === 0 || pass.length === 0) {
            errorMessage.classList.remove('hide');
            return false;
        } else {
            errorMessage.classList.add('hide');
            return true;
        }
    }
}