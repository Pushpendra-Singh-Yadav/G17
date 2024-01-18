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
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Username: ' + username);
    console.log('Password: ' + password);
});

document.getElementById('googleSignIn').addEventListener('click', function() {
    // Here you would typically integrate with the Google Sign-In API.
    console.log('Google Sign-In button clicked');
});

document.getElementById('facebookSignIn').addEventListener('click', function() {
    // Here you would typically integrate with the Facebook Login API.
    console.log('Facebook Sign-In button clicked');
});
