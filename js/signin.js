let elSignInForm = document.querySelector(".signin-form")
let elLink = document.querySelector(".link")

elSignInForm.addEventListener("submit" , function(e) {
    e.preventDefault()
    const obj = {
        login:e.target.login.value,
        password:e.target.password.value
    }
    e.target[2].innerHTML = `<img class="mx-auto" src="./img/loading.png" width="24" height="24"/>`
    e.target.reset()
    const registered = JSON.parse(window.localStorage.getItem("registered"))
    if(registered){
        if(obj.login.trim().toLowerCase() == registered.newLogin.toLowerCase() && obj.password.trim().toLowerCase() == registered.newPassword.toLowerCase()){
            window.localStorage.setItem("logined" , JSON.stringify(obj))
            setTimeout(() => {
                e.target[2].innerHTML = "SIGN IN"
                location.pathname = "./student.html"
            },2500)
        }
        else{
            setTimeout(() => {
                e.target[2].innerHTML = "SIGN IN"
                alert("wrong")
            },2500)  
        }
    }
    else{
        if(obj.login.trim().toLowerCase() == "shaxzoda" && obj.password.trim().toLowerCase() == "123"){
            window.localStorage.setItem("logined" , JSON.stringify(obj))
            setTimeout(() => {
                e.target[2].innerHTML = "SIGN IN"
                location.pathname = "./student.html"
            },2500)
        }
        else{
            setTimeout(() => {
                e.target[2].innerHTML = "SIGN IN"
                alert("wrong")
            },2500)  
        }
    }
})
elLink.addEventListener("click" , () => {
    location.pathname = "./signup.html"
})