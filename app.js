const shareIcon = document.querySelector(".share-icon");
const content = document.querySelector(".content");

shareIcon.addEventListener("click", () => {
  if (!document.querySelector(".active")) {
    document.querySelector(".details").classList.add("active");
  } else {
    document.querySelector(".details").classList.remove("active");
  }
});

content.addEventListener("click", () => {
  document.querySelector(".details").classList.remove("active");
});
