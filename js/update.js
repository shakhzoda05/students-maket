let updateId = JSON.parse(window.localStorage.getItem("updateId"))
let studentsList = JSON.parse(window.localStorage.getItem("studentslist"))

let elupdatePart = document.querySelector(".update")

let singleData = studentsList.find(item => item.id == updateId)

let elTextInput = document.querySelector(".text-input")
let elEmailInput = document.querySelector(".email-input")
let elPhoneInput = document.querySelector(".phone-input")
let elNumberInput = document.querySelector(".number-input")
let elDateInput = document.querySelector(".date-input")
let elUpdateImgInput = document.querySelector(".update-img")
let elUploadImg = document.querySelector(".img")
let elUpdateForm = document.querySelector(".update-form")


elTextInput.value = singleData.name
elEmailInput.value = singleData.email
elPhoneInput.value = singleData.phone
elNumberInput.value = singleData.number
elDateInput.value = singleData.date
elUploadImg.src = singleData.imgUrl

elUpdateImgInput.addEventListener("change" ,function(e){
    elUploadImg.src = URL.createObjectURL(e.target.files[0])
})


elUpdateForm.addEventListener("submit", function(e) {
    e.preventDefault()
    singleData.name = elTextInput.value 
    singleData.email = elEmailInput.value 
    singleData.phone = elPhoneInput.value 
    singleData.number = elNumberInput.value  
    singleData.date = elDateInput.value  
    singleData.imgUrl = elUploadImg.src 

    window.localStorage.setItem("studentslist" , JSON.stringify(studentsList))
    setTimeout(()=>{
        location.pathname = "./student.html"
    },800)
})