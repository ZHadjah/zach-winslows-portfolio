function sendMail(){
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const serviceID = "service_adgtt6j";
    const tempalteID = "template_3ldqeau";

    emailjs
        .send(serviceID, tempalteID, params)
        .then(() => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            Swal.fire({
                icon: 'success',
                title: 'The email has been sent!',
                text: 'Zachary Winslow will respond ASAP.',
              })
        })
        .catch((err) => console.log(err));
}		