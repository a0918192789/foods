document.querySelector(".menu").addEventListener("click", function () {
  document.querySelectorAll(".target").forEach(function (item) {
    item.classList.toggle("change");
  });
});

const icons = document.querySelectorAll(".section-1_icons i");

let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector(".section-1_icons .change");
  // console.log(icon);
  icon.classList.remove("change");

  if (i > icons.length) {
    // console.log(icons.length);
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 2000);
