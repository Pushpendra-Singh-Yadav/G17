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
var galleryPage = document.getElementById("gallery-page");
var closeButton = document.getElementById("close-button");
var imageContainer = document.getElementById("image-container");
function openPage() {
  galleryPage.style.display = "block";
  imageContainer.innerHTML = "";
  fetch("https://example.com/api/images")
    .then(response => response.json())
    .then(data => {
      for (let image of data) {
        let img = document.createElement("img");
        img.src = image.url;
        img.alt = image.name;
        imageContainer.appendChild(img);
      }
    })
    .catch(error => {
      console.error(error);
    });
}
function closePage() {
  galleryPage.style.display = "none";
}
window.addEventListener("click", function(event) {
  if (event.target == galleryPage) {
    galleryPage.style.display = "none";
  }
});