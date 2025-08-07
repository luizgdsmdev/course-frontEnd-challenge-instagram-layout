let imagesList = document.querySelectorAll(".content__login-img-wrapper");
let imageFocused = 0;

function moveImagesCarrossel(htmlImageElements) {
  htmlImageElements[imageFocused].classList.toggle("active");

  setInterval(() => {
    htmlImageElements[imageFocused].classList.toggle("active");
    htmlImageElements[imageFocused].classList.toggle("carrossel_img-move-back");
    
    imageFocused = (imageFocused + 1) % htmlImageElements.length;
    htmlImageElements[imageFocused].classList.add("active");

    setTimeout(() => {
        const prevImageIndex = (imageFocused - 1 + htmlImageElements.length) % htmlImageElements.length;
        htmlImageElements[prevImageIndex].classList.toggle("carrossel_img-move-back");
    }, 4000);
  }, 9000);
}

moveImagesCarrossel(imagesList);