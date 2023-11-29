import createHeader from "./components/HeaderContent/Header.component";
import createMain from "./components/MainContent/Main.component";
import createFooter from "./components/FooterContent/Footer/Footer.component";
// import "@/style.css";

const rootElement = document.getElementById("root");
const headerElement = createHeader();
const mainElement = createMain();

rootElement.append(headerElement);
rootElement.append(mainElement);
rootElement.append(createFooter());
