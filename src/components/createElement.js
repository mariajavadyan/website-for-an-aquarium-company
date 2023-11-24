export function createElement({ tag, content, placeholder, id, src, className, href, alt }) {
    const element = document.createElement(tag);

    if (content) {
        element.textContent = content;
    }
    if (placeholder) {
        element.setAttribute("placeholder", placeholder);
    }

    if (id) {
        element.setAttribute("id", id);
    }

    if (src) {
        element.setAttribute("src", src);
    }

    if (className) {
        element.setAttribute("class", className);
    }

    if (href) {
        element.setAttribute("href", href);
    }

    if (alt) {
        element.setAttribute("alt", alt);
    }


    return element;
}