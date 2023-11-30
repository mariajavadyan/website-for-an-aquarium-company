async function getImage (image) {
    return await import(`@/static/images/productspictures/${image}`);
}

export default getImage;