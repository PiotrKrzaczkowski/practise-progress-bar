document.addEventListener("DOMContentLoaded", () => {
  const progressBarInner = document.querySelector(".progress-bar-inner");

  window.addEventListener("scroll", () => {
    let h = document.documentElement;

    let scrollTop = h.scrollTop || document.body.scrollTop;
    let scrollHeight = h.scrollHeight || document.body.scrollHeight;
    let percent = Math.round(
      (scrollTop / (scrollHeight - h.clientHeight)) * 100
    );
    progressBarInner.style.width = `${percent}%`;
  });
});
