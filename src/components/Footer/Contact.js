function createContact() {
    let contactContainerElement = document.createElement("div");
    let contactElement = document.createElement("div");
    let mailElement = document.createElement("div");
    let emptyElement = document.createElement("div");
    let telElement = document.createElement("div");

    contactContainerElement.setAttribute("class", "footer_w50");


    contactElement.textContent = "Contact";
    contactContainerElement.append(contactElement);
    mailElement.textContent = "aquadreamspace.com";
    contactContainerElement.append(mailElement);
    emptyElement.setAttribute("class", "footer_mt17");
    contactContainerElement.append(emptyElement);
    telElement.textContent = "123-456-7890";
    telElement.setAttribute("class", "footer_mb-0");
    contactContainerElement.append(telElement);


    return contactContainerElement;
}

export default createContact;