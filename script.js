// HERO SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);

// WHATSAPP BOOKING
function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let service = document.getElementById("service").value;

  let msg = `Hello Drive_Decor,%0AName: ${name}%0AMobile: ${mobile}%0AService: ${service}`;
  window.open(`https://wa.me/917549126937?text=${msg}`, "_blank");
}
