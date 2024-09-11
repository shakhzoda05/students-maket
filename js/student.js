
let elModal = document.querySelector(".modal")
let elModalForm = document.querySelector(".modal-form")

let InputImg = document.querySelector(".img-input")
let elInputImg = document.querySelector(".image")

let elRenderList = document.querySelector(".student-list")

let elAvatarInput = document.querySelector(".avatar-img")

let elAvatarImg = document.querySelector(".avatar")

let elSearchInput = document.querySelector(".search")

let studentsList = JSON.parse(window.localStorage.getItem("studentslist")) || []


function handleAdd(){
    elModal.classList.add("scale-100")
}

function handleBack(){
    elModal.classList.remove("scale-100")
}

elAvatarInput.addEventListener("change" , function(e){
    elAvatarImg.src = URL.createObjectURL(e.target.files[0])    
    console.log(elAvatarImg.src);
})


InputImg.addEventListener("change" , function(e) {
    elInputImg.src = URL.createObjectURL(e.target.files[0])

})
elModalForm.addEventListener("submit" , (e) => {
    e.preventDefault()
    const list = {
        id:studentsList.length ? studentsList[studentsList.length -1].id +1 : 1,
        imgUrl:elInputImg.src,
        name:e.target.name.value,
        phone:e.target.phone.value,
        date:e.target.date.value,
        email:e.target.email.value,
        number:e.target.number.value,
    } 
    studentsList.push(list)
    window.localStorage.setItem("studentslist", JSON.stringify(studentsList) )
    e.target.reset()
    setTimeout(() => {
        elModal.classList.remove("scale-100")
    },800)
    renderStudents(studentsList,elRenderList)
})


function renderStudents(arr,list){
    list.innerHTML = ""
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "bg-white py-[15px] pl-[13px] rounded-[8px] flex items-center relative"
        elItem.innerHTML = `
                    <img src="${item.imgUrl}" alt="avatar" width="60" height="50" class="rounded-[8px] mr-[66px]">
                    <span class="font-normal text-[14px] leading-[17px] w-[153px]">${item.name}</span>
                    <span class="font-normal text-[14px] leading-[17px] w-[184.15px]">${item.email}</span>
                    <span class="font-normal text-[14px] leading-[17px] w-[134.47px]">${item.phone}</span>
                    <span class="font-normal text-[14px] leading-[17px] w-[204.75px]">${item.number}</span>
                    <span class="font-normal text-[14px] leading-[17px]">${item.date}</span>
                    <div class="flex gap-[14.5px] absolute right-8">
                        <button>
                            <img src="./img/more.svg" onclick="clickMore(${item.id})" alt="more" width="24" height="6">
                        </button>
                        <button>
                            <img src="./img/update.svg" onclick="clickUpdate(${item.id})" alt="update" width="21" height="21">
                        </button>
                        <button>
                            <img src="./img/delete.svg" onclick="clickDelete(${item.id})" alt="delete" width="18" height="20">    
                        </button>
                    </div>
        `
        elRenderList.append(elItem)
    });
}

renderStudents(studentsList,elRenderList)

function clickMore(id){
    window.localStorage.setItem("moreId" , JSON.stringify(id))
    setTimeout(() => {
        location.pathname = "./more.html"
    },800) 
}

function clickUpdate(id){
    window.localStorage.setItem("updateId", JSON.stringify(id))
    setTimeout(() => {
        location.pathname = "./update.html"
    },800) 
}



elSearchInput.addEventListener("keyup" , (e) => {
    let searchValue = e.target.value
    let searchedList = studentsList.filter(item => item.name.trim().toLowerCase().includes(searchValue.toLowerCase()))
    renderStudents(searchedList,elRenderList);
})

function clickSort(){
    let sortedList = studentsList.sort((a,b) =>a.name.localeCompare(b.name))
    renderStudents(sortedList,elRenderList)
}

function clickDelete(id){
    let deleteIndex = studentsList.findIndex(item => item.id == id)
    studentsList.splice(deleteIndex,1)
    renderStudents(studentsList,elRenderList)
    window.localStorage.setItem("studentslist" , JSON.stringify(studentsList))
}