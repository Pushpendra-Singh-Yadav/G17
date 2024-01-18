var popup = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");
function openPopup() {
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });