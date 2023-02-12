//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

function kirim() {
  let message = document.getElementById("message").value;

  let email = document.getElementById("email").value;

  let nama = document.getElementById("nama").value;

  var win = window.open(
    `https://wa.me/62895418020633?text=Nama:%20${nama}%0AEmail:%20${email}%0APesan:%20${message}`,
    "_blank"
  );
  // win.focus();
}
