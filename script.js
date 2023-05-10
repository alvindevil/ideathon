const container = document.querySelector(".container");
const page = document.querySelector(".page");
const card = document.querySelector(".card");
const regbtn = document.querySelector(".reg-btn")


//card rotate on mouse move
container.addEventListener("mousemove", (rotate) => {
  let x = (innerWidth / 2 - rotate.pageX) / 120;
  let y = (innerHeight / 2 - rotate.pageY) / 120;

  page.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg) translate3d(0,0,0px) ";
});

//card effects on mouse over the card
container.addEventListener("mouseover", () => {
  card.style.transform = "translate3d(0, 0,90px)";
});

//card back to normal when mouse out
container.addEventListener("mouseout", () => {
  page.style.transform = "rotateY(0deg) rotateX(0deg) rotateZ(0deg)";
  card.style.transform = "translate3d(0, 0, 0px)";
  regbtn.style.transform = "translate3d(0,0,100px)";
});
