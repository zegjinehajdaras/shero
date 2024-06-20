const hamburgerMenu = document.getElementById("hamburgerMenu");
const navBar = document.getElementById("nav-bar");

hamburgerMenu.addEventListener("click", function () {
  console.log("clicked");
  navBar.classList.toggle("active");
  navBar.style.display = "block";
});

//Carousel

  const productContainers = document.querySelectorAll(".carousel");
  const nxtBtn = document.querySelectorAll(".next-btn");
  const preBtn = document.querySelectorAll(".pre-btn");

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });



