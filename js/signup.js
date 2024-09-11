let elSignUp = document.querySelector(".signup-form")

elSignUp.addEventListener("submit", (e) => {
    e.preventDefault()
    const obj = {
        newLogin:e.target.newlogin.value,
        newPassword:e.target.newpassword.value
    }
    window.localStorage.setItem("registered" , JSON.stringify(obj))
    e.target[2].innerHTML = `<img class="mx-auto" src="./img/loading.png" width="24" height="24"/>`
    setTimeout(() => {
        location.pathname = "./index.html"
    },2000)
} )