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
    }
  );

  const { label: emailInputLabel, inputElement: emailInput } =
    createInputElement({
      id: "email",
      tag: "input",
      type: "email",
      name: "email",
      required: true,
      labelText: "Email",
    });

  const { label: messageTextareaLabel, inputElement: messageTextarea } =
    createInputElement({
      id: "message",
      required: true,
      tag: "textarea",
      name: "message",
      labelText: "Message",
    });

  form.appendChild(nameInputLabel);
  form.appendChild(emailInputLabel);
  form.appendChild(messageTextareaLabel);

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

    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageTextarea.value;

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

      name = "";
      email = "";
      message = "";
    }
  });

  return form;
}

export default CreateContact;
