// import MyTest from './components/MyTest';

// MyTest();

import "@/style.css";
import Raleway400 from '@/assets/fonts/raleway400.woff2';
import Raleway700 from '@/assets/fonts/raleway700.woff2';
import OswaldMedium from '@/assets/fonts/Oswald-Medium.woff2';
import OswaldMediumV16 from '@/assets/fonts/Oswald-MediumV16.woff';
import acuariumImage from '@/assets/images/acuarium.webp';
import facebookImage from '@/assets/images/facebook.webp';
import youtubeImage from '@/assets/images/youtube.webp';
import instagramImage from '@/assets/images/instagram.webp';
import { createElement } from "@/components/createElement";

const gameSectionElement = document.querySelector(".gameSection");

gameSectionElement.append(createElement({ tag: "img", id: "acuarium", src: acuariumImage }))
gameSectionElement.append(createElement({ tag: "p", className: "game", content: "Game" }))


const arrSocSites = [
    {
        text: 'facebook',
        src: facebookImage,
    },
    {
        text: 'youtube',
        src: youtubeImage,
    },
    {
        text: 'instagram',
        src: instagramImage,
    }
];
const socIconsContainerElement = document.querySelector(".socIconsContainer");
for (let index = 0; index < arrSocSites.length; index++) {
    const liElement = createElement({ tag: "li" });
    socIconsContainerElement.append(liElement);

    const aElement = createElement({
        tag: "a",
        href: `#${arrSocSites[index].text}`
    });
    liElement.append(aElement);

    const imgElement = createElement({
        tag: "img",
        alt: arrSocSites[index].text,
        src: arrSocSites[index].src,
        className: "socIcons"
    });
    aElement.append(imgElement);
}


const css = `
@font-face {
    font-family: 'Raleway400';
    font-style: normal;
    font-weight: 400;
    src: url(${Raleway400}) format('woff2');
    font-display: block;
}

@font-face {
    font-family: 'Raleway700';
    font-style: normal;
    font-weight: 700;
    src: url(${Raleway700}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: block;
}

@font-face {
    font-family: "Oswald-Medium";
    src: url(${OswaldMedium}) format('woff2'),
    url(${OswaldMediumV16}) format('woff');
    font-display: block;
}`;

const style = createElement({ tag: "style", content: css });
document.head.append(style);
