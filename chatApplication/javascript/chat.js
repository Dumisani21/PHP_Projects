const form = document.querySelector(".typing-area")
inputField = form.querySelector(".input-field")
sendBtn = form.querySelector("button")
chatBox = document.querySelector(".chat-box")

// Functions
function submitForm(e) {
    e.preventDefault()
}


function sendMessage() {
    // Ajax
    let xhr = new XMLHttpRequest()
    xhr.open("POST","php/insert-chat.php", true)
    xhr.onload = ()=>  {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                inputField.value = ""
                scrollToEnd()
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData)
}

function scrollUpActive() {
    chatBox.classList.add('active');
}

function scrollUpUnactive() {
    chatBox.classList.remove('active');
}

setInterval(()=>{
    // Ajax
    let xhr = new XMLHttpRequest()
    xhr.open("POST","php/get-chat.php", true)
    xhr.onload = ()=>  {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response
                chatBox.innerHTML = data
                if(!chatBox.classList.contains('active')){
                    scrollToEnd()
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData)
},500)



function scrollToEnd() {
    chatBox.scrollTop = chatBox.scrollHeight;
}



// EvetListeners
form.addEventListener('submit', submitForm)
sendBtn.addEventListener('click', sendMessage)
chatBox.addEventListener('mouseenter', scrollUpActive)
chatBox.addEventListener('mouseleave', scrollUpUnactive)