const shareIcon = document.querySelector(".share-icon");
const modalShareIcon = document.querySelector(".modal-share-icon");
const content = document.querySelector(".content");

shareIcon.addEventListener("click", () => {
  if (!document.querySelector(".active")) {
    document.querySelector(".modal").classList.add("active");
    document.querySelector(".modal-arrow").classList.add("active-arrow");
  } else {
    document.querySelector(".modal").classList.remove("active");
    document.querySelector(".modal-arrow").classList.remove("active-arrow");
  }
});

modalShareIcon.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".modal-arrow").classList.remove("active-arrow");
});

content.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".modal-arrow").classList.remove("active-arrow");
});
