
// userdata page elements
const userNameText = document.getElementById("user-name__text");
const userPassText = document.getElementById("user-pass__text");


userNameText.textContent = `User name:  ${sessionStorage.getItem('userName')}`
userPassText.textContent = `User Password:  ${sessionStorage.getItem('userPassword')}`

