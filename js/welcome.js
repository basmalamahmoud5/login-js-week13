let usernameMass=document.getElementById("usernameMass");

window.addEventListener("load",function(){
    displayUserName()
})
function displayUserName() {
    if (localStorage.getItem("userName")!==null) {
        usernameMass.innerHTML=`welcome ${localStorage.getItem("userName")}`
    }else{
        usernameMass.innerHTML=""
    }
    
}


