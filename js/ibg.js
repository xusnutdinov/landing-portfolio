function ibg() {
    let images = document.querySelectorAll('.ibg');

    images.forEach(function ( image) {
        if (image.querySelector('img')) {
            image.style.backgroundImage = 'url(' + image.querySelector('img').getAttribute('src') + ')';
        }
    })
}
ibg();