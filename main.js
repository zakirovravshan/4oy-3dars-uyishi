let inpName = document.querySelector('.input__name')
let inpRel = document.querySelector('.input__rel')
let inpTel = document.querySelector('.input__tel')

let elForm = document.querySelector('.form')
let elList = document.querySelector('.contact__list')
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

elForm.addEventListener('submit' ,  function(evt){
    evt.preventDefault()

    let newItem = document.createElement('li')
    elList.appendChild(newItem)
    let userName = document.createElement('p')
    userName.textContent = capitalize(inpName.value)
    newItem.appendChild(userName)
    let userRel = document.createElement('p')
    userRel.textContent = capitalize(inpRel.value)
    newItem.appendChild(userRel)
    let userTel = document.createElement('a')
    userTel.textContent = inpTel.value
    newItem.appendChild(userTel)
    userTel.setAttribute("href",  "tel:inpTel.value");
})