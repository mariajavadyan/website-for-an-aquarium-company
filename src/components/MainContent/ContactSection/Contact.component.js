import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import createInputElement from "../../../helpers/createInputElement";

function CreateContact() {
  const form = document.createElement("form");
  form.setAttribute("id", "contactForm");

  const heading = document.createElement("h2");
  heading.textContent = "Contact Us";
  form.appendChild(heading);

  form.appendChild(
    createInputElement({
      tag: "input",
      type: "text",
      id: "name",
      name: "name",
      labelText: "Name",
      required: true,
    })
  );
  form.appendChild(
    createInputElement({
      tag: "input",
      type: "email",
      id: "email",
      name: "email",
      labelText: "Email",
      required: true,
    })
  );
  form.appendChild(
    createInputElement({
      tag: "textarea",
      id: "message",
      name: "message",
      labelText: "Message",
      required: true,
    })
  );

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit");
  form.appendChild(submitButton);

  const errorMessages = document.createElement("p");
  errorMessages.setAttribute("id", "errorMessages");
  errorMessages.classList.add("error");
  form.appendChild(errorMessages);

  const successMessage = document.createElement("p");
  successMessage.setAttribute("id", "successMessage");
  successMessage.style.display = "none";
  successMessage.style.color = "green";
  successMessage.textContent = "Message sent successfully!";
  form.appendChild(successMessage);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageTextarea.value;

    let errorMessagesText = "";

    if (!name || !email || !message) {
      errorMessagesText += "Please fill in all fields.<br>";
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      errorMessagesText += "Please enter a valid email address.<br>";
    }

    const errorDisplay = document.getElementById("errorMessages");
    const successDisplay = document.getElementById("successMessage");

    if (errorMessagesText) {
      errorDisplay.innerHTML = errorMessagesText;
    } else {
      errorDisplay.innerHTML = "";

      sendEmail();

      successDisplay.style.display = "block";

      nameInput.value = "";
      emailInput.value = "";
      messageTextarea.value = "";
    }
  });

  function sendEmail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    emailjs.send("service_0i4h0pk", "template_cdoya2p", params, "MQtLIIqwQH_67LOBO").then(function(res) {
      alert('Success! ' + res.status)
    });
  }

  return form;
}

export default CreateContact;
