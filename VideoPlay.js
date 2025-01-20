// video play js
const progress = document.querySelector("#progress");
let timer = document.querySelector("#timer");
let start = document.querySelector(".start");
let end = document.querySelector(".end");
let video = document.querySelector("video");
let desc = document.querySelector(".description-box");
let playPausebutton = document.querySelector("#play");

let list = playPausebutton.classList;
function progressLoop() {
  setInterval(function () {
    progress.value = Math.round((video.currentTime / video.duration) * 100);
    start.innerHTML = Math.round(video.currentTime);
    end.innerHTML = Math.round(video.duration);
  });
}

progressLoop();





function playPause() {
  if (video.paused) {
    video.play();
    list.remove("fa-play");
    list.add("fa-pause");
  } else {
    video.pause();
    list.remove("fa-pause");
    list.add("fa-play");
  }
}


playPausebutton.addEventListener("click", playPause);

video.addEventListener("play", progressLoop);

let pre = document.querySelector("pre");
let morebtn = document.querySelector(".more");
let more = false;
morebtn.addEventListener("click", function () {
  morebtn.innerHTML = "";
  if (morebtn) {
    let para = document.createElement("p");

    para.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo ad nemo distinctio, suscipit laudantium?";
    desc.appendChild(para);
    console.log("success");
    let lessbtn = document.createElement("button");
    lessbtn.classList.add("more");
    desc.appendChild(lessbtn);
    lessbtn.innerHTML = "show less";
    more = true;
    lessbtn.addEventListener("click", function () {
      lessbtn.innerHTML = "";
      morebtn.innerHTML = "...more";
      desc.removeChild(para);
    });
  }
});
//  let inputBox = document.createElement('P')
// let img = document.createElement('img')
// inputBox.className='input-box'
// inputBox.setAttribute("contenteditable", "true")
// img.src="img/delete.png"
// NoteContainer.appendChild(inputBox).appendChild(img);
