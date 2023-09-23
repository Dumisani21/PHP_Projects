const backFilter = document.querySelector('.forms-filter')
const editBox = document.querySelector('.forms')
const formFirstName = document.querySelector('.forms #fname')
const formLasttName = document.querySelector('.forms #lname')
const formEmail = document.querySelector('.forms #email')
const firstName = document.querySelectorAll('tbody #fname')
const lasttName = document.querySelectorAll('tbody #lname')
const email = document.querySelectorAll('tbody #email')
const delBtn = document.querySelectorAll('tbody #delBtn')
const editBtn = document.querySelectorAll('tr #editBtn')
const save = document.querySelector('.save')
const discard = document.querySelector('.discard')
const tableBody = document.querySelector('.tableBody')



// editing data
editBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        formFirstName.value = firstName[index].textContent
        formLasttName.value = lasttName[index].textContent
        formEmail.value = email[index].textContent
        backFilter.classList.add('active')
        editBox.classList.add('active')
    })
});


// Functions

function requestData(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET','php/data.php',true)
    xhr.onload = function() {
        if(this.readyState === XMLHttpRequest.DONE){
            if(this.status == 200){
                tableBody.innerHTML = this.response
            }
        }
    }
    xhr.send()
}

function Save() {
    firstName[indexCounter].textContent = formFirstName.value
    lasttName[indexCounter].textContent = formLasttName.value
    email[indexCounter].textContent = formEmail.value
    Discard()
}

function Discard() {
    backFilter.classList.remove('active')
    editBox.classList.remove('active')
}

function removeBC() {
    if (backFilter.classList.contains('active') && editBox.classList.contains('active')) {
        backFilter.classList.remove('active')
        editBox.classList.remove('active')
    }
}


// EventListeners
window.addEventListener('DOMContentLoaded',requestData)
discard.addEventListener('click', Discard)
backFilter.addEventListener('click', removeBC)
save.addEventListener('click', Save)


