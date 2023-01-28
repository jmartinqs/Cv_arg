"strict mode";
// Curriculum vitae

document.getElementById("Cvhead").addEventListener("click", function () {
  console.log("Curriculum Vitae proyecto Arg Programa");
  alert("Bienvenidos a mi proyecto");
});

/// Elementos toggle web movil
function classToggle() {
  const navs = document.querySelectorAll(".navbar-items");

  navs.forEach((nav) => nav.classList.toggle("navbar-toggleshow"));
}

document
  .querySelector(".navbar-link-toggle")
  .addEventListener("click", classToggle);

/// Links contacto

document.getElementById("btnGmail").href = "https://gmail.com";

document.getElementById("Email").addEventListener("click", function () {
  console.log("Aqui encontrariamos el link a Gmail");
});

document.getElementById("btnTwitt").href = "https://twitter.com";

document.getElementById("Twitter").addEventListener("click", function () {
  console.log("Link a Twitter");
});

document.getElementById("btnWeb").href = "https://time.is/";

document.getElementById("Web").addEventListener("click", function () {
  console.log("Link a Webpage");
});
