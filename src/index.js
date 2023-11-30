import createHeader from "./components/HeaderContent/Header.component";
import createMain from "./components/MainContent/Main.component";
import createFooter from "./components/FooterContent/Footer.component";

import "@/style.css";

const rootElement = document.getElementById("root");

rootElement.append(createHeader());
rootElement.append(createMain());
rootElement.append(createFooter());
