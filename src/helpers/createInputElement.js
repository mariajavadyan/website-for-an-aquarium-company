function createInputElement({
  id,
  tag,
  type,
  name,
  pattern,
  labelText,
  placeholder,
  required = false,
}) {
  const label = document.createElement("label");
  label.textContent = labelText;

  const inputElement = document.createElement(tag);

  inputElement.setAttribute("id", id);
  inputElement.setAttribute("name", name);
  type && inputElement.setAttribute("type", type);
  pattern && inputElement.setAttribute("pattern", pattern);
  required && inputElement.setAttribute("required", "true");
  placeholder && inputElement.setAttribute("placeholder", placeholder);


  label.appendChild(inputElement);
  return { label, inputElement };
}

export default createInputElement;
