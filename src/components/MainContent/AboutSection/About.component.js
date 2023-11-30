import aboutSrc from "@/static/images/about.webp";

function CreateAbout() {
  const aboutImage = document.createElement("img");
  aboutImage.setAttribute("src", aboutSrc);
  aboutImage.alt = "Aqua Dream Space Picture";
  return aboutImage;
}

export default CreateAbout;