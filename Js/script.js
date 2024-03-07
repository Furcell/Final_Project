// burger-bar
let navigationElement = document.getElementById("nav-bar");
let burgerElement = document.getElementById("burger-bar");

burgerElement.addEventListener( "click", function() {
    burgerElement.classList.toggle("burger-border")
    navigationElement.classList.toggle("activeNav");
});

let button = document.getElementById("alert-element");

button.addEventListener("click",function () {
    alert("ERROR")
})
// scroll top
window.onscroll = () =>{
    if(window.scrollY > 60){
        document.querySelector("#scroll-top").classList.add("active");      
    }else{
        document.querySelector("#scroll-top").classList.remove("active");  
    }
}
