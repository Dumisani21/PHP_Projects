const passwordfield = document.querySelector(".form .field input[type='password']")
toggleBtn = document.querySelector('.form .field i')

function toggleButton() {
    if (passwordfield.type == "password"){
        passwordfield.type = "text"
        toggleBtn.classList.remove('fa-eye')
        toggleBtn.classList.add('fa-eye-slash')
        toggleBtn.style.color = "#333"
    }else {
        passwordfield.type = 'password'
        toggleBtn.classList.remove('fa-eye-slash')
        toggleBtn.classList.add('fa-eye')
        toggleBtn.style.color = "#ccc"
    }
}


toggleBtn.addEventListener('click', toggleButton)