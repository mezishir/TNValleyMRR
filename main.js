const galleryGrid = document.getElementById("gallery-grid");

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