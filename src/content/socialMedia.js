import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";

library.add(faFacebookF, faYoutube, faInstagram);
dom.watch();

export const socialMedia = [
    { classNames: ['fa-brands', 'fa-facebook-f'], url: 'https://www.facebook.com/' },
    { classNames: ['fab', 'fa-youtube'], url: 'https://www.youtube.com/' },
    { classNames: ['fab', 'fa-instagram'], url: 'https://www.instagram.com/' },
];
  