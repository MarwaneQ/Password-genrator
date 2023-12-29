let passBox = document.getElementById("password");
let but = document.getElementById('pg')
let copy = document.querySelector('img')
let lenght = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+-={}[]|\:;'<>,.?/";
let allChars = upperCase + lowerCase + numbers + symbols;
function genrator() {
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]
    password += symbols[Math.floor(Math.random()*symbols.length)]
    
    while (lenght> password.length) {
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }
    passBox.value = password;
}
function copypassword() {
    passBox.select()
    navigator.clipboard.writeText(passBox.value);
}
but.addEventListener('click', genrator);
copy.addEventListener('click',copypassword)
