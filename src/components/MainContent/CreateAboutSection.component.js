import CreateSection from "./CreateSection.component";

function CreateAboutSection() {
  const aboutSection = CreateSection(
    "about",
    "About Aqua Dream Space",
    "Aqua Dream Space is a leading Aquarium Manufacturer company committed to providing the best quality of aquarium products and services. Our team is passionate about designing and manufacturing premium aquariums that cater to the needs of aquatic enthusiasts around the world. From small to large scale aquariums, Aqua Dream Space has a product line that caters to every budget and preference. We take pride in our innovative designs, high-quality materials, and exceptional customer service. Get in touch with us today to learn more about how we can help bring your aquatic dreams to life."
  );

  // image for the about section
  const aboutImage = document.createElement("img");
  aboutImage.src = "about.webp";
  aboutImage.alt = "Aqua Dream Space Picture";
  aboutSection.appendChild(aboutImage);

  return aboutSection;
}

export default CreateAboutSection;
