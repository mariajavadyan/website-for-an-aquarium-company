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
  cityElement.setAttribute("class", commonStyles["mt-17"]);
  addressContainerElement.append(cityElement);

  streetElement.classList.add(commonStyles["mb-0"], commonStyles["mt-17"]);
  streetElement.textContent = "Aram street";

  addressContainerElement.append(streetElement);
  emptyElement.setAttribute("class", commonStyles["mb-0"]);

  addressContainerElement.append(emptyElement);

  return addressContainerElement;
}

export default createAddress;
