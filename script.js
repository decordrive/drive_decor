function bookNow() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let service = document.getElementById("service").value;

    let message = `Hello Drive_Decor,%0A
Name: ${name}%0A
Mobile: ${mobile}%0A
Service Required: ${service}`;

    window.open(`https://wa.me/917549126937?text=${message}`, "_blank");
}
