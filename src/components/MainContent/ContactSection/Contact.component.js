import styles from "./Contact.module.css";
import sendEmail from "@/helpers/sendEmail";
import { formFields } from "@/content/formFields";
import createInputElement from "@/helpers/createInputElement";

function CreateContact() {
  const form = document.createElement("form");
  form.classList.add(styles["form-container"]);

  formFields.forEach((inputConfig) => {
    const { label, inputElement } = createInputElement(inputConfig);
    form.appendChild(label);
    label.classList.add(styles["form-label"]);
    inputElement.classList.add(styles[`form-${inputConfig.tag}`]);
  });

  const submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.classList.add(styles["form-submit"]);
  form.appendChild(submitButton);

  const errorMessages = document.createElement("p");
  errorMessages.classList.add(styles["error-messages"]);
  errorMessages.style.display = "none";
  form.appendChild(errorMessages);

  const successMessage = document.createElement("p");
  successMessage.classList.add(styles["success-message"]);
  successMessage.textContent = "Message sent successfully!";
  successMessage.style.display = "none";
  form.appendChild(successMessage);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formInputs = form.querySelectorAll("input, textarea");

    let errorMessagesText = "";

    formInputs.forEach((input) => {
      const inputValue = input.value;

      if (!inputValue && input.getAttribute("required") !== null) {
        errorMessagesText += `Please fill in ${input.getAttribute(
          "name"
        )} field.<br>`;
        return;
      }

      if (input.getAttribute("type") === "tel" && inputValue) {
        const phoneRegex = /^\+374[0-9]{8}$/;

        if (!phoneRegex.test(inputValue)) {
          errorMessagesText += `Please enter a valid phone number in the format +374 ######## for ${input.getAttribute(
            "name"
          )}.<br>`;
          errorMessages.style.display = "block";
          return;
        }
      }

      if (input.getAttribute("type") === "email" && inputValue) {
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(inputValue)) {
          errorMessagesText += `Please enter a valid email address for ${input.getAttribute(
            "name"
          )}.<br>`;
          errorMessages.style.display = "block";
          return;
        }
      }
    });

    if (errorMessagesText) {
      errorMessages.innerHTML = errorMessagesText;
      form.appendChild(errorMessages);
    } else {
      sendEmail();
      errorMessages.style.display = "none";
      successMessage.style.display = "block";
      console.log(successMessage);

      formInputs.forEach((input) => {
        input.value = "";
      });

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
    }
  });

  return form;
}

export default CreateContact;
