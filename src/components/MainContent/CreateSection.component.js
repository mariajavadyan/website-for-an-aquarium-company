function CreateSection(id, title, content, isShowContent = false) {
  const section = document.createElement("section");
  section.id = id;
  if (isShowContent) {
    section.classList.add("show-content");
  }

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = content;

  section.appendChild(h2);
  section.appendChild(p);

  return section;
}

export default CreateSection;
