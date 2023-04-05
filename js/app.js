
const barsMenu = document.querySelector(".bars .fa-bars");
const barsMobil = document.querySelector(".bars-off");
const barsClose = document.querySelector(".clous");
const bodyColor = document.querySelector(".bars-bag");

barsMenu.addEventListener("click", () => {
    barsMobil.classList.add("active-menu");
    // bodyColor.style.background = "rgba(30,40,69,0.8)";
      
});
barsClose.addEventListener("click" , () => {
    barsMobil.classList.remove("active-menu")
    bodyColor.style.background = "none";

})

$('.home').click(function(){
    $(this).next().slideToggle(1000)
})