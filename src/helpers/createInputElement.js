function createInputElement({ tag, type, id, name, labelText, required = false }) {
  const label = document.createElement("label");
  label.textContent = labelText;

  const inputElement = document.createElement(tag);
  type && input.setAttribute("type", type);
  inputElement.setAttribute("id", id);
  inputElement.setAttribute("name", name);

  required && inputElement.setAttribute("required", "true");

  label.appendChild(inputElement);
  return label;
}

export default createInputElement;