import createFollow from "@/components/Footer/Follow.js";
import createAddress from "@/components/Footer/Address.js";
import createContact from "@/components/Footer/Contact.js";

function createFooter() {
    let footerElement = document.createElement("footer");
    footerElement.setAttribute("class", "footer_container");
    footerElement.append(createFollow());
    footerElement.append(createContact());
    footerElement.append(createAddress());

    return footerElement;
}

export default createFooter;