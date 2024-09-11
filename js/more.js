
let moreId = JSON.parse(window.localStorage.getItem("moreId"))
let studentsList = JSON.parse(window.localStorage.getItem("studentslist"))

let elMorePage = document.querySelector(".more-page")


const findSingleData = studentsList.find(item => item.id == moreId)



elMorePage.innerHTML = `
<div class="py-[11.5px] flex justify-between items-center border-b-[1px] border-[#E5E5E5]">
    <h3 class="font-bold text-[22px] leading-[27px] capitalize text-[#000000]">${findSingleData.name}</h3>
</div>
<div class="w-[650px] h-[400px] bg-white rounded-md p-[30px] pb-[147px] flex gap-[51px] items-center relative mt-[25px]">
    <img src="${findSingleData.imgUrl}" alt="img" width="209" height="216" class="rounded-md h-[216px]">
    <div class="space-y-[16px]">
        <div>
            <span class="font-semibold text-[12px] leading-[14px] text-[#ACACAC]">Name</span>
            <p class="font-normal text-[16px] leading-[19px]">${findSingleData.name}</p>
        </div>
        <div>
            <span class="font-semibold text-[12px] leading-[14px] text-[#ACACAC]">Email</span>
            <p class="font-normal text-[14px] leading-[17px]">${findSingleData.email}</p>
        </div>
        <div>
            <span class="font-semibold text-[12px] leading-[14px] text-[#ACACAC]">Phone</span>
            <p class="font-normal text-[14px] leading-[17px]">${findSingleData.phone}</p>
        </div>
        <div>
            <span class="font-semibold text-[12px] leading-[14px] text-[#ACACAC]">Date admission</span>
            <p class="font-normal text-[14px] leading-[17px]">${findSingleData.date}</p>
        </div>
    </div>
    <img src="./img/pen.svg" alt="pen" width="11" height="82" class="absolute right-[10px] top-[15px]">
</div>
`

function goToBack(){
    setTimeout(()=>{
        location.pathname = "./student.html"
    },800)
}













