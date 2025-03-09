//your JS code here. If required.
let nextBtn=document.querySelector("#next")
let prevBtn=document.querySelector("#prev")
let circles=document.querySelectorAll(".circle")
let count=0;
function updateProgress(){
circles.forEach((circle,index)=>{
	
if(index<=count){
	circle.classList.add("active")
	circle.style.backgroundColor="green"
}else{
	circle.classList.remove("active")
	circle.style.backgroundColor="white"
}
})
	 prevBtn.disabled = count === 0;
	nextBtn.disabled =count===circles.length-1
}


nextBtn.addEventListener("click",()=>{
	
	if(count<circles.length-1){
		count++
		updateProgress()
	}
})

prevBtn.addEventListener("click",()=>{
	
	if(count>=0){
		count--
		updateProgress()
	}
})