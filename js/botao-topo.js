const home = document.getElementById("home");
const subirTopo = document.getElementById("subirTopo");

window.addEventListener("scroll", () => {
    const homeBottom = home.offsetTop + home.offsetHeight;

    if (window.scrollY >= homeBottom - 100) {
        subirTopo.classList.add("show");
    } else {
        subirTopo.classList.remove("show");
    }
});