import "@/style.css";
import font from '@/assets/fonts/oswald.woff2';
import mainImage from '@/assets/images/default-avatar.png';
import { createElement } from "./createElement";

function Test () {
    const css = `
@font-face {
    font-family: 'oswald';
    src: url(${font}) format('woff');
}
`;

    const rootElement = document.getElementById("test");

    rootElement.append(createElement({ tag: "h1", content: "Text" }));
    rootElement.append(createElement({ tag: "input", content: "", placeholder: "Aman aman"}));
    rootElement.append(createElement({ tag: "img", content: "", placeholder: "", id: "img", src: mainImage }));

    const style = document.createElement('style');
    style.append(createElement({ tag: "style", content: css }));
}

export default Test;