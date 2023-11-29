import CreateSection from "./CreateSection.component";

function createHomeSection() {
  const homeSection = CreateSection(
    "home",
    "Welcome to My Website",
    "This is the home section of my website."
  );

  return homeSection;
}

export default createHomeSection;
