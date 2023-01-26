"strict mode";

function classToggle() {
  const navs = document.querySelectorAll(".navbar-items");

  navs.forEach((nav) => nav.classList.toggle("navbar-toggleshow"));
}

document
  .querySelector(".navbar-link-toggle")
  .addEventListener("click", classToggle);

// document.getElementById('botonGm').addEventListener('click') = "location.href'https://gmail.com';"

// element.addEventListener("click", function() {
//   document.getElementById("botonGm").innerHTML = href'https://gmail.com';
// });

const botonGmail = document.querySelector('botonGm');

botonGmail.addEventListener('click', function () {
  'https://gmail.com'
})