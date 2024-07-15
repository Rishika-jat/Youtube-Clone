// Sidebar JS

let menuBar = document.querySelector(".icon-menu");
let sidebar = document.querySelector(".sidebar");
let sidebar2 = document.querySelector(".sidebar2");
let filterbtns = document.querySelector(".filter-btns");
let container = document.querySelector(".container");
let thumbnails = document.querySelectorAll('.thumbnail')
let profile = document.querySelectorAll('.vid-profile');
let bannerimg = document.querySelector('.banner-img')
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

    sidebar2.style.position = "absolute";
    filterbtns.style.left = "80px";
   bannerimg.style.width="1400px"

    container.style.left = "80px";
    container.style.width="1400px";
   thumbnails.forEach(thumbnail=>{
    thumbnail.style.width="335px"
   })
   profile.forEach(vidprofile=>{
// vidprofile.style.gap="30px"
vidprofile.style.width="335px"
   })
   
  
  } else if (currentStatusSide === false) {
    sidebar.style.display = "block";
    sidebar2.style.display = "none";
    currentStatusSide = true;
    filterbtns.style.left = "250px";
     bannerimg.style.width="1200px"
    container.style.position = "absolute";
    container.style.left = "260px";
    container.style.width="1200px";
    thumbnails.forEach(thumbnail=>{
      thumbnail.style.width="385px"
     })
     profile.forEach(vidprofile=>{
  vidprofile.style.width="385px"
     })
  }
});


// filter button Color js
let filterButtons = document.querySelectorAll('.filter-btns button');
let thumbnailcon = document.querySelectorAll('.container .thumbnail-container');
let thumbnailbann = document.querySelector('.container .banner');

const filterThumbnail = e =>{
  document.querySelector('.active').classList.remove('active');
  e.target.classList.add('active');
thumbnailbann.classList.add("hide");
  thumbnailcon.forEach(thumb=>{
    thumb.classList.add("hide");

    if(thumb.dataset.name === e.target.dataset.name || e.target.dataset.name==='all'){
      thumb.classList.remove("hide");
    }
  })
}

filterButtons.forEach(button=>button.addEventListener('click',filterThumbnail))
