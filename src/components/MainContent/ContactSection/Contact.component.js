import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import sendEmail from "../../../helpers/sendEmail";
import createInputElement from "../../../helpers/createInputElement";

function CreateContact() {
  const form = document.createElement("form");
  form.setAttribute("id", "contactForm");

  const { label: nameInputLabel, inputElement: nameInput } = createInputElement(
    {
      id: "name",
      tag: "input",
      type: "text",
      name: "name",
      required: true,
      labelText: "Name",
      placeholder: "Ann",
    }
  );

  const { label: phoneInputLabel, inputElement: phoneInput } =
    createInputElement({
      id: "phone",
      type: "tel",
      tag: "input",
      name: "phone",
      required: true,
      labelText: "Phone",
      pattern: "+374[0-9]{8}",
      placeholder: "+37498991133",
    });

  const { label: emailInputLabel, inputElement: emailInput } =
    createInputElement({
      id: "email",
      tag: "input",
      type: "email",
      name: "email",
      required: true,
      labelText: "Email",
      placeholder: "smith@gmail.com",
    });

  const { label: messageTextareaLabel, inputElement: messageTextarea } =
    createInputElement({
      id: "message",
      required: true,
      tag: "textarea",
      name: "message",
      labelText: "Message",
      placeholder: "Hello, ...",
    });

  form.appendChild(nameInputLabel);
  form.appendChild(phoneInputLabel);
  form.appendChild(emailInputLabel);
  form.appendChild(messageTextareaLabel);

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit");
  form.appendChild(submitButton);

  const errorMessages = document.createElement("p");
  errorMessages.setAttribute("id", "errorMessages");
  errorMessages.style.color = "red";
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
    const phone = phoneInput.value;
    const email = emailInput.value;
    const message = messageTextarea.value;

    let errorMessagesText = "";

    if (!name || !phone || !email || !message) {
      errorMessagesText += "Please fill in all fields.<br>";
    }

    const phoneRegex = /^\+374[0-9]{8}$/;
    if (!phoneRegex.test(phone)) {
      errorMessagesText +=
        "Please enter a valid phone number in the format +374 ########.<br>";
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
      phoneInput.value = "";
      emailInput.value = "";
      messageTextarea.value = "";

      setTimeout(() => (successDisplay.style.display = "none"), 3000);
    }
  });

  return form;
}

export default CreateContact;
