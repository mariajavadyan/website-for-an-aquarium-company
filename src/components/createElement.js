export function createElement({ tag, content, placeholder, id }) {
  const element = document.createElement(tag);
  element.textContent = content;
  if (placeholder) {
    element.setAttribute("placeholder", placeholder);
  }

  if (id) {
    element.setAttribute("id", id);
  }
  

  return element;
}