import styles from "./Contact.module.css";
import commonStyles from "../Footer.module.css";

function createContact() {
    let contactContainerElement = document.createElement("div");
    let contactElement = document.createElement("div");
    let mailElement = document.createElement("div");
    let emptyElement = document.createElement("div");
    let telElement = document.createElement("div");

    contactContainerElement.classList.add(styles["w-50"], commonStyles["container-elem"]);


    contactElement.textContent = "Contact";
    contactContainerElement.append(contactElement);
    mailElement.textContent = "aquadreamspace.com";
    mailElement.setAttribute("class", commonStyles["mt-17"]);
    contactContainerElement.append(mailElement);
    contactContainerElement.append(emptyElement);
    telElement.textContent = "123-456-7890";
    telElement.classList.add(commonStyles["mb-0"], commonStyles["mt-17"]);
    contactContainerElement.append(telElement);


    return contactContainerElement;
}

export default createContact;