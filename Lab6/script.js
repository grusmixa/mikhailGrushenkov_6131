const user = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    msg: ""
};
let form = document.getElementById('mainform');

function saveForm(form) {
    localStorage.setItem('firstName', form.firstName.value);
    localStorage.setItem('lastName', form.lastName.value);
    localStorage.setItem('email', form.email.value);
    localStorage.setItem('phone', form.phone.value);
    localStorage.setItem('msg', form.msg.value);
    console.log(localStorage);
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value) {

    options = {
        path: '/'
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function isValid(form) {
    let arrOfErr = [];
    let addPatternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let addPatternPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let addPatternName = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;

    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let message = form.msg.value;
    let email = form.email.value;
    let phone = form.phone.value;

    if (getCookie('firstName') === firstName && getCookie('lastName') === lastName && getCookie('send') === "true") alert(`${firstName} ${lastName}, Your message on the review!`);
    else {
        if (!addPatternName.test(firstName)) arrOfErr.push("First Name");
        if (!addPatternName.test(lastName)) arrOfErr.push("Last Name");
        if (message == " " || message == "") arrOfErr.push("Message");
        if (!addPatternEmail.test(email)) arrOfErr.push("Email");
        if (phone != "" && !addPatternPhone.test(phone)) arrOfErr.push("Phone number");

        if (arrOfErr.length > 1) alert(`The ${arrOfErr.join(", ")} fields are incorrect! Please fill it again.`);
        else if (arrOfErr.length === 1) alert(`The ${arrOfErr} field is incorrect! Please fill it again.`);
        else {
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.phone = phone;
            user.msg = message;
            alert(`${firstName} ${lastName}, thank you for your message!`);
            setCookie("firstName", firstName);
            setCookie("lastName", lastName);
            setCookie("send", true);

        }
    }
}

let storVal = {
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
    email: localStorage.getItem('email'),
    phone: localStorage.getItem('phone'),
    message: localStorage.getItem('msg')
};
if (storVal.firstName) form.firstName.value = storVal.firstName;
if (storVal.lastName) form.lastName.value = storVal.lastName;
if (storVal.email) form.email.value = storVal.email;
if (storVal.phone) form.phone.value = storVal.phone;
if (storVal.message) form.msg.value = storVal.message;


















