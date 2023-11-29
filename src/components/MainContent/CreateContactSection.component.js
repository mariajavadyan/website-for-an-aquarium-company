import CreateSection from "./CreateSection.component";

function CreateContactSection() {
  const contactSection = CreateSection(
    "contact",
    "Contact Us",
    "Have questions or inquiries? Reach out to us using the contact information provided below."
  );

  // Append sections to the body
  return contactSection;
}

export default CreateContactSection;
