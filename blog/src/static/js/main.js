var mobBurg = document.querySelector(".js-burg");
var mobMenu = document.querySelector(".js-menu");
var clickBody = document.getElementsByTagName("body");
mobBurg.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (mobMenu.classList.contains("show-menu")) {
    mobMenu.classList.remove("show-menu");
  } else {
    mobMenu.classList.add("show-menu");
  }
});
