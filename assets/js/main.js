


document.querySelector(".add-edu").onclick = function() {
    
    document.querySelector("p").textContent = "software engineer";
    
}


document.querySelector(".add-dark").onclick = function() {

document.querySelector("body").classList.add("dark-mode");
}

document.querySelector(".add-light").onclick = function() {

document.querySelector("body").classList.remove("dark-mode");
}

document.querySelector(".Change").onclick = function(){
document.querySelector("body").classList.toggle("dark-mode")
}