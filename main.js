console.log("it works!");

const wrapper = document.querySelector("#wrapper");
const contentDivs = document.querySelectorAll(".content");

document.addEventListener("scroll", () => {
  if (window.scrollY >= wrapper.getBoundingClientRect().top) {
    contentDivs.forEach((contentDiv) => {
      if (window.scrollY >= contentDiv.getBoundingClientRect().top - 50) {
        const imageId = contentDiv.getAttribute("data-asset");
        const visibleImg = "#" + imageId;
        document.querySelectorAll(".sticky > div").forEach((currImg) => {
          currImg.classList.remove("active");
        });

        document.querySelector(visibleImg).classList.add("active");
      }
    });
  }
});
