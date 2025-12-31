// Show popup after 2 seconds
setTimeout(() => {
    document.getElementById("offerPopup").style.display = "block";
}, 2000);

function closePopup() {
    document.getElementById("offerPopup").style.display = "none";
}

// Send booking to WhatsApp
function sendWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;

    let msg = `Hello Drive_Decor,%0AName: ${name}%0APhone: ${phone}%0AService: ${service}`;
    window.open("https://wa.me/917549126937?text=" + msg, "_blank");
}
