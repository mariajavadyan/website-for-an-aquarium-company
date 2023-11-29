import DisplayProducts from "./DisplayProducts.component";

function ToggleSection(sectionId) {
  let allSections = document.querySelectorAll("section");

  allSections.forEach(function (section) {
    section.style.display = "none";
  });

  let selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = "block";

  if (sectionId === "products") {
    DisplayProducts();
  }
}

export default ToggleSection;
