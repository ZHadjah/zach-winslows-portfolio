function sendMail(){
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const serviceID = "service_hbf3x2m";
    const tempalteID = "template_14cfr62";

    emailjs
        .send(serviceID, tempalteID, params)
        .then((res) => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            console.log('your msg got sent');
            alert("msg sent")
        })
        .catch((err) => console.log(err));
}		