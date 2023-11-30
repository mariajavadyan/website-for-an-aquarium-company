import createFollow from "./Follow/Follow.component";
import createContact from "./Contact/Contact.component";
import createAddress from "./Address/Address.component";
import styles from "./Footer.module.css";

function createFooter() {
  let footerElement = document.createElement("footer");
  footerElement.setAttribute("class", styles["container"]);
  footerElement.append(createFollow());
  footerElement.append(createContact());
  footerElement.append(createAddress());

  return footerElement;
}

export default createFooter;
