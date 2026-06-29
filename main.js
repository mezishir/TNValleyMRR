const galleryGrid = document.getElementById("gallery-grid");

if (galleryGrid) {
  fetch("/gallery.json")
    .then((response) => response.json())
    .then((galleryItems) => {
      galleryItems.forEach((itemData) => {
        const item = document.createElement("figure");
        item.className = "gallery-item";

        const img = document.createElement("img");
        img.src = itemData.src;
        img.alt = itemData.alt || "Club photo";
        item.appendChild(img);

        galleryGrid.appendChild(item);
      });
    })
    .catch((error) => {
      console.error("Gallery manifest load failed:", error);
    });
}

const memorialCarousel = document.getElementById("memorial-carousel");
const memorialPrevButton = document.querySelector(".carousel-prev");
const memorialNextButton = document.querySelector(".carousel-next");

if (memorialCarousel && memorialPrevButton && memorialNextButton) {
  const updateCarouselButtons = () => {
    const maxScrollLeft = memorialCarousel.scrollWidth - memorialCarousel.clientWidth;
    memorialPrevButton.disabled = memorialCarousel.scrollLeft <= 0;
    memorialNextButton.disabled = memorialCarousel.scrollLeft >= maxScrollLeft - 2;
  };

  memorialPrevButton.addEventListener("click", () => {
    memorialCarousel.scrollBy({ left: -320, behavior: "smooth" });
  });

  memorialNextButton.addEventListener("click", () => {
    memorialCarousel.scrollBy({ left: 320, behavior: "smooth" });
  });

  memorialCarousel.addEventListener("scroll", updateCarouselButtons, { passive: true });
  window.addEventListener("resize", updateCarouselButtons);
  updateCarouselButtons();
}