function createAddress() {
    let addressContainerElement = document.createElement("div");
    let addressElement = document.createElement("div");
    let cityElement = document.createElement("div");
    let streetElement = document.createElement("div");
    let emptyElement = document.createElement("div");

    addressElement.textContent = "Address";
    addressContainerElement.append(addressElement);
    cityElement.textContent = "Yerevan Armenia";
    addressContainerElement.append(cityElement);
    streetElement.setAttribute("class", "footer_mb-0");
    streetElement.textContent = "Aram street";
    addressContainerElement.append(streetElement);
    emptyElement.setAttribute("class", "footer_mb-0");
    addressContainerElement.append(emptyElement);


    return addressContainerElement;
}

export default createAddress;