let form = document.querySelector('form');
let password = document.getElementById('password');
let confirmPass = document.getElementById('confirmPassword');
let result = document.getElementById('checkPassword');

password.addEventListener('input', checkPasswordEquality);
confirmPass.addEventListener('input', checkPasswordEquality);

form.addEventListener('submit', function(e){
    e.preventDefault();
    x = checkPasswordEquality();
    if(x === true) {
        result.textContent = "Form Submitted.";
        result.setAttribute('style', 'color : green;');
    }else {
        result.textContent = "Cannot submit form. Check password and try again.";
        result.setAttribute('style', 'color : orange;');
        result.setAttribute('style', 'color : orange;');
    }
})

function checkPasswordEquality() {
    let passText = password.value.trim();
    let confirmPassText = confirmPass.value.trim();
    if(passText === '' || confirmPassText === ''){
        result.textContent = '';
        result.classList.add('show');
        return false;
    }else if(passText === confirmPassText){
        result.textContent = "Passwords Match";
        result.setAttribute('style', 'color : green;');
        result.classList.add('show');
        return true;
    }else {
        result.textContent = "Passwords didn't Match";
        result.setAttribute('style', 'color : red;');
        result.classList.add('show');
        return false;
    }
}