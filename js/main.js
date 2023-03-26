
// вызывать (*) когда нажимют на иконку бургер
document.addEventListener("click", function(event) {
    if (event.target.id === "burger" || event.target.classList.contains("line")) {
        document.querySelector("#nav").classList.toggle("active");
    }
})
