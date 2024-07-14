// Sidebar JS

let menuBar = document.querySelector(".icon-menu");
let sidebar = document.querySelector(".sidebar");
let sidebar2 = document.querySelector(".sidebar2");
let filterbtns = document.querySelector('.filter-btns')
let side1 = document.querySelector(".side-1");
let side2 = document.querySelector(".side-2");
let side3 = document.querySelector(".side-3");
let side4 = document.querySelector(".side-4");
let side5 = document.querySelector(".side-5");
let side6 = document.querySelector(".side-6");
let download = document.querySelector(".download");

let currentStatusSide = true;
menuBar.addEventListener("click", function () {
  if (currentStatusSide === true) {
    sidebar.style.display = "none";
    sidebar2.style.display = "block";
    currentStatusSide = false;
    filterbtns.style.position="sticky";
    filterbtns.sidebar.style.top="0px";
    filterbtns.sidebar.style.left="0px";
   
  } else if (currentStatusSide === false) {
    sidebar.style.display = "block";
    sidebar2.style.display = "none";
    currentStatusSide = true;
    filterbtns.style.position="absolute";
    filterbtns.sidebar.style.top="70px";
    filterbtns.sidebar.style.left="250px";
   

  }
});
