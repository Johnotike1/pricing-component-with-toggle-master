const toggle = document.getElementById("toggle");
const monthly = document.querySelectorAll(".monthly");
const annually = document.querySelectorAll(".annually");



toggle.addEventListener("click", () => {
    if (toggle.checked == true) {
        monthly.forEach(month => month.style.display = "block");
        annually.forEach(annual => annual.style.display = "none");
    } else {
        monthly.forEach(month => month.style.display = "none");
        annually.forEach(annual => annual.style.display = "block");
    }
});



