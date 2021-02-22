//sideNav//
let openNav = document.querySelector(`#header > a[href= "#menu"]`);
openNav.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById("menu").classList.toggle("visible")
});

function closeNav() {
    document.getElementById("menu").classList.remove("visible")
};

//isLoading//
function isLoading() {
    var element = document.body;
    element.classList.add("is-loading");
}
isLoading();
window.addEventListener('load', function (e) {
    window.setTimeout(function () {
        document.body.classList.remove("is-loading")
    }, 100);
})


