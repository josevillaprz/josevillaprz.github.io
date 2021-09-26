class Validation {
    constructor(){}

    static validateForm(...inputs){
        let valid = true;
        inputs.forEach(input => {
            if(input.validity.valueMissing){
                input.style.borderBottom = '2px solid tomato';
                valid = false;
            }else {
                input.style.borderBottom = '2px solid #BABABA';
            }
        });
        return valid;
    }
}