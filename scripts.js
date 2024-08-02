//Icono Menú

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}




menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
} 

//Formulario Contacto

let form = document.querySelector("form");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let subject = document.getElementById("subject");

function sendEmail() {

    let bodyMessage = `Nombre Completo: ${fullName.value}<br> 
                    Email: ${email.value}<br> 
                    Teléfono: ${phone.value}<br> 
                    Asunto: ${subject.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ivangonzalez.code@gmail.com",
        Password : "963B2C5B57A88496E49C75075C6FD85447A2",
        To : 'ivangonzalez.code@gmail.com',
        From : "ivangonzalez.code@gmail.com",
        Subject : subject.value,
        Body : bodyMessage 
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Éxito",
                text: "Mensaje enviado",
                icon: "success",
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});

