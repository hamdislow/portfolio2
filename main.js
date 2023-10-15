// Ambil elemen button dan elemen detail
const toggleButton = document.getElementById("toggleButton");
const detail = document.querySelector(".about-exp-item-detail");

// Tambahkan event listener untuk mengganti tampilan detail
toggleButton.addEventListener("click", function () {
    if (detail.style.display === "none" || detail.style.display === "") {
        detail.style.display = "block";
    } else {
        detail.style.display = "none";
    }
});