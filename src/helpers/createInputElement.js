function createInputElement({
  id,
  tag,
  type,
  name,
  labelText,
  required = false,
}) {
  const label = document.createElement("label");
  label.textContent = labelText;

  const inputElement = document.createElement(tag);
  type && inputElement.setAttribute("type", type);
  inputElement.setAttribute("id", id);
  inputElement.setAttribute("name", name);

  required && inputElement.setAttribute("required", "true");

  label.appendChild(inputElement);
  return { label, inputElement };
}

export default createInputElement;
