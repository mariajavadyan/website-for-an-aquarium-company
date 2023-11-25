import "@/style.css";

function createFooter() {
    let footerElement = document.createElement("footer");
    footerElement.textContent = "Footer Element";
    footerElement.setAttribute("class", "footer_red");

    return footerElement;
}

export default createFooter;