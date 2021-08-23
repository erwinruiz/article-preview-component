const shareIcon = document.querySelector(".share-icon");
const modalShareIcon = document.querySelector(".modal-share-icon");
const content = document.querySelector(".content");

shareIcon.addEventListener("click", () => {
  if (!document.querySelector(".active")) {
    document.querySelector(".modal").classList.add("active");
  }
});

modalShareIcon.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("active");
});

content.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("active");
});
