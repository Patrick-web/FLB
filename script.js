const video = document.querySelector("video");

document.querySelector("#showConverter").addEventListener("click", () => {
  video.src = "./assets/videos/converter.mkv";
  document.body.classList.add("playingVideo");
  video.play();
});
document.querySelector("#showMerger").addEventListener("click", () => {
  video.src = "./assets/videos/mixer.mkv";
  document.body.classList.add("playingVideo");
  video.play();
});
document.querySelector(".videoArea").addEventListener("click", () => {
  document.body.classList.remove("playingVideo");
  video.pause();
});
document.querySelectorAll(".showDOptions").forEach((bt) => {
  bt.addEventListener("click", () => {
    document.body.classList.add("showDownloadOptions");
  });
});
document.querySelector("#closeDopt").addEventListener("click", () => {
  document.body.classList.remove("showDownloadOptions");
});
