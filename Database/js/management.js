const formFirstName = document.querySelector('.form-management #fname')
const formData = document.querySelector('.form-management form')
const formLasttName = document.querySelector('.form-management #lname')
const formEmail = document.querySelector('.form-management #email')
const save = document.querySelector('.save')
const discard = document.querySelector('.discard')
const infoMsg = document.querySelector('.error-msg')

function preventSubmit(e) {
    e.preventDefault()
}


function errorStyle(message, color){
    infoMsg.textContent = message
    infoMsg.classList.add('active')
    infoMsg.classList.add(color)

    setTimeout(() => {
        infoMsg.textContent = ""
        infoMsg.classList.remove('active')
        infoMsg.classList.remove(color)
    },5000)
}

function errorReport(message){
    if(message == "success"){
        errorStyle(message, "bg-success")
    }else{
        errorStyle(message, "bg-danger")
    }
}


// Ajax 
function SaveData() {
    let xhr = new XMLHttpRequest() 

    xhr.open("POST","php/save.php",true)
    xhr.onload = function() {
        if(this.readyState === XMLHttpRequest.DONE){
          if(this.status == 200){
            let respond = this.response
            errorReport(respond)
          }
        }
      }
    let data = new FormData(formData)
    xhr.send(data)
}



formData.addEventListener('submit', preventSubmit)
save.addEventListener('click', SaveData)