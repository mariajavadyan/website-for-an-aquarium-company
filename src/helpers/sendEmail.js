function sendEmail() {
  const params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_0i4h0pk", "template_cdoya2p", params, "MQtLIIqwQH_67LOBO")
    .then(function (res) {
      alert("Success! " + res.status);
    });
}

export default sendEmail;