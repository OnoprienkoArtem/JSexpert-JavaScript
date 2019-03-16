let Validator = function () {
    this.errors = {
        required: 'field is required'
    }
}

Validator.prototype = {
    isValid: function (mail, pass) {
        if (mail.length === 0 || pass.length === 0) {            
            return {
                status: false,
                msg: this.errors.required
            };
        } else {            
            return {
                status: true               
            };
        }
    }
}