import commonStyles from "../CommonStyles.css";

function createAddress() {
    let addressContainerElement = document.createElement("div");
    let addressElement = document.createElement("div");
    let cityElement = document.createElement("div");
    let streetElement = document.createElement("div");
    let emptyElement = document.createElement("div");

    addressElement.textContent = "Address";
    addressContainerElement.setAttribute("class", commonStyles["container-elem"]);
    addressContainerElement.append(addressElement);

    cityElement.textContent = "Yerevan Armenia";
    addressContainerElement.append(cityElement);

    streetElement.setAttribute("class", commonStyles["mb-0"]);
    streetElement.textContent = "Aram street";

    addressContainerElement.append(streetElement);
    emptyElement.setAttribute("class", commonStyles["mb-0"]);

    addressContainerElement.append(emptyElement);

    return addressContainerElement;
}

export default createAddress;