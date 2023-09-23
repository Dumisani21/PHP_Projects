const form = document.querySelector(".signup form")
contionueBtn = form.querySelector(".button input")
errorText = form.querySelector(".error-txt")

function submitForm(e) {
    e.preventDefault()
}

function contionueButton() {
    // Ajax
    let xhr = new XMLHttpRequest()
    xhr.open("POST","php/signup.php", true)
    xhr.onload = ()=>  {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response
                if(data == "success"){
                    location.href = "users.php"
                }else{
                    errorText.textContent = data
                    errorText.style.display = "block"
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData)
}

form.addEventListener('submit', submitForm)
contionueBtn.addEventListener('click', contionueButton)