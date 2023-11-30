import styles from "./Main.module.css";

function CreateSection({id, title, content}) {
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  section.id = id;

  if(id !== "home") {
    section.classList.add(styles["hide-content"]);
  }
  section.classList.add(styles[id]);

  h2.textContent = title;
  p.textContent = content;

  section.appendChild(h2);
  section.appendChild(p);

  return section;
}

export default CreateSection;
