import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

function createGalleryMarcap(arry) {
  return arry
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item"> <a class="gallery__link" href="${original}">
 		<img class="gallery__image" src="${preview}" alt="${description}"/></a></li> `;
    })
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", createGalleryMarcap(galleryItems));

new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });