import ToggleSection from "@/components/ToggleSection.component";
import styles from "./Header.module.css";
import srcFish from "@/static/images/fish.png";

function createHeader() {
  const header = document.createElement("header");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add(styles["logo"]);

  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", srcFish);
  //   logoImg.src = "fish.png";
  logoImg.alt = "Aqua Dream Space logo";

  const logoHeading = document.createElement("h1");
  logoHeading.textContent = "Aqua Dream Space";

  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(logoHeading);

  header.appendChild(logoDiv);

  const nav = document.createElement("nav");

  const ul = document.createElement("ul");

  ["Home", "Products", "About", "Contact"].forEach((text) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${text.toLowerCase()}`;
    a.textContent = text;
    a.onclick = () => ToggleSection(text.toLowerCase());
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  header.appendChild(nav);

  return header;
}

export default createHeader;
