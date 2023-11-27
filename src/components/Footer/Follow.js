import facebookSrc from "@/assets/images/facebook.webp";
import youtubeSrc from "@/assets/images/youtube.webp";
import instagramSrc from "@/assets/images/instagram.webp";

function createFollow() {
    let followContainerElement = document.createElement("div");
    let followElement = document.createElement("div");
    let socIconsContainer = document.createElement("ul");
    let liElementForFacebook = document.createElement("li");
    let liElementForYoutube = document.createElement("li");
    let liElementForInstagram = document.createElement("li");
    let aElementForFacebook = document.createElement("a");
    let aElementForYoutube = document.createElement("a");
    let aElementForInstagram = document.createElement("a");
    let imgElementForFacebook = document.createElement("img");
    let imgElementForYoutube = document.createElement("img");
    let imgElementForInstagram = document.createElement("img");

    followElement.textContent = "Follow";
    followContainerElement.append(followElement);

    socIconsContainer.setAttribute("class", "footer_socIconsContainer");
    socIconsContainer.append(liElementForFacebook);

    aElementForFacebook.setAttribute("href", "https://www.facebook.com/");
    liElementForFacebook.append(aElementForFacebook);

    imgElementForFacebook.setAttribute("class", "footer_socIcons");
    imgElementForFacebook.setAttribute("src", facebookSrc);
    imgElementForFacebook.setAttribute("alt", "facebook");
    aElementForFacebook.append(imgElementForFacebook);

    socIconsContainer.append(liElementForYoutube);

    aElementForYoutube.setAttribute("href", "https://www.youtube.com/");
    liElementForYoutube.append(aElementForYoutube);
    
    
    imgElementForYoutube.setAttribute("class", "footer_socIcons");
    imgElementForYoutube.setAttribute("src", youtubeSrc);
    imgElementForYoutube.setAttribute("alt", "youtube");
    aElementForYoutube.append(imgElementForYoutube);

    socIconsContainer.append(liElementForInstagram);

    aElementForInstagram.setAttribute("href", "https://www.instagram.com/");
    liElementForInstagram.append(aElementForInstagram);

    imgElementForInstagram.setAttribute("class", "footer_socIcons");
    imgElementForInstagram.setAttribute("src", instagramSrc);
    imgElementForInstagram.setAttribute("alt", "instagram");
    aElementForInstagram.append(imgElementForInstagram);

    followContainerElement.append(socIconsContainer);

    return followContainerElement;
}

export default createFollow;