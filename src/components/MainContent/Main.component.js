import CreateSection from "./CreateSection.component";

import CreateSearch from "./ProductsSection/SearchContainer/Search.component";
import CreateListContainer from "./ProductsSection/ListContainer/ListContainer.component";

import CreateHome from "./HomeSection/Home.component";
import CreateAbout from "./AboutSection/About.component";
import CreateContact from "./ContactSection/Contact.component";

function createMain() {
  const main = document.createElement("main");

  const homeSection = CreateSection({
    id: "home",
    title: "Welcome to My Website",
    content: "This is the home section of my website."
  });
  const productsSection = CreateSection({
    id: "products",
    title: "Products",
  });
  const aboutSection = CreateSection({
    id: "about",
    title: "About Aqua Dream Space",
    content: "Aqua Dream Space is a leading Aquarium Manufacturer company committed to providing the best quality of aquarium products and services. Our team is passionate about designing and manufacturing premium aquariums that cater to the needs of aquatic enthusiasts around the world. From small to large scale aquariums, Aqua Dream Space has a product line that caters to every budget and preference. We take pride in our innovative designs, high-quality materials, and exceptional customer service. Get in touch with us today to learn more about how we can help bring your aquatic dreams to life."
  });
  const contactSection = CreateSection({
    id: "contact",
    title: "Contact Us",
    content: "Have questions or inquiries? Reach out to us using the contact information provided below."
  });

  if(CreateHome()) {
    homeSection.appendChild(CreateHome());
  }
  productsSection.appendChild(CreateSearch());
  productsSection.appendChild(CreateListContainer());
  if(CreateAbout()) {
    aboutSection.appendChild(CreateAbout());
  }
  if(CreateContact()) {
    contactSection.appendChild(CreateContact());
  }

  main.appendChild(homeSection);
  main.appendChild(productsSection);
  main.appendChild(aboutSection);
  main.appendChild(contactSection);

  return main;
}

export default createMain;