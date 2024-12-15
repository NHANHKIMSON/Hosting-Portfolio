window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    
    // Delay hiding the preloader by 3 seconds (3000ms)
    setTimeout(function () {
        preloader.style.display = "none"; // Hide the preloader
    }, 300);
});
