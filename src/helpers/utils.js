const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ;
const spaceRegex = /\s/g;
const phoneRegex = /^\d{10}$/;

export const validateFormFields = (formFields) => {
    let nameError = '';
    let emailError = '';
    let passwordError = '';
    let confirmPasswordError = '';
    let usernameError = '';
    let phoneError = '';
    let genderError = '';
    let professionError = '';
    let skillsError = '';
    let isInvalid = false;

    const {name,email,username,gender,password,confirmPassword,profession,phone,skillsState} = formFields;

    if(name.trim().length === 0) {
        nameError = 'Name can not be empty or less than 3 characters.' 
    }

    if(!email || !emailRegex.test(email)) {
        emailError = 'Enter a valid email.'
    }

    if(username.trim().length === 0 || spaceRegex.test(username) || username.length < 8) {
        usernameError = 'Username must contain atleast 8 characters with no space.'
    }

    if(gender.length === 0) {
        genderError = 'Gender must be selected.'
    }

    if(profession.length === 0) {
        professionError = 'Designation can not be empty.'
    }

    if(!phoneRegex.test(phone)) {
        phoneError = 'Phone number must be of 10 digits.'
    }

    if(skillsState.length === 0) {
        skillsError = 'Choose one or more skills.'
    }

    if(password.length === 0 || password.length < 8) {
        passwordError = 'Password must contain atleast 8 characters.'
    }

    if(confirmPassword.length === 0 || confirmPassword.length < 8) {
        confirmPasswordError = 'Confirm Password must contain atleast 8 characters.'
    }

    if(password !== confirmPassword) {
        passwordError = 'Passwords do not match.';
        confirmPasswordError = 'Passwords do not match.';
    }

    if(nameError || emailError || usernameError || phoneError || skillsError || genderError || passwordError || confirmPasswordError || professionError) {
        isInvalid = true;
    }

    return {
        isInvalid,
        nameError,
        emailError,
        usernameError,
        genderError,
        phoneError,
        professionError,
        passwordError,
        skillsError,
        confirmPasswordError
    }

}