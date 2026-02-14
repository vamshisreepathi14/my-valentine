document.getElementById("yesBtn").addEventListener("click",function(){
document.getElementById("letterSection").classList.remove("hidden");
document.getElementById("photoSection").classList.remove("hidden");
document.getElementById("dateSection").classList.remove("hidden");
document.getElementById("surpriseSection").classList.remove("hidden");
});

function openLetter(){
document.getElementById("letterContent").classList.toggle("hidden");
}

function showMessage(num){
document.getElementById("msg"+num).classList.toggle("hidden");
}
