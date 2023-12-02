function toggleSection(sectionId) {
  let allSections = document.querySelectorAll("section");

  allSections.forEach(function (section) {
    section.style.display = "none";
  });

  let selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = "block";
}

export default toggleSection;