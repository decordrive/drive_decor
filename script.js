// Offer popup after 2 seconds
setTimeout(() => {
    document.getElementById("offerPopup").style.display = "block";
}, 2000);

function closePopup() {
    document.getElementById("offerPopup").style.display = "none";
}

// Booking form to WhatsApp
function sendWhatsApp() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;

    let message = `Hello Drive_Decor,%0A
Name: ${name}%0A
Phone: ${phone}%0A
Service: ${service}`;

    window.open("https://wa.me/917549126937?text=" + message, "_blank");
}
