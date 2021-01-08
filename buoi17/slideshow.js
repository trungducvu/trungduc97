///slideshow
var slideIndex = 1;
showSlide(slideIndex);
function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("singleSlide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
function plusSlide(n) {
    showSlide(slideIndex += n);
}
//Sidebar Drodown
var dropdown = document.getElementsByClassName("btn_dropdown");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("showSlide");
        var dropdownItem = document.querySelector(".dropdown_container")
        if (dropdownItem.style.display == "block") {
            dropdownItem.style.display = "none";
        }
        else {
            dropdownItem.style.display = "block";
        }
    });
}