(async () => {
  const $ = document.querySelector.bind(document);

  let elBtns = ["home", "about", "contact"];

  for (let i of elBtns) {
    if (location.href.match(new RegExp(i, "g"))) {
      window.scrollTo(0, $(`.${i}`).offsetTop);
    }
    $(`#${i}`).addEventListener("click", () => {
      if (
        !location.href.match(new RegExp(i, "g")) ||
        $(`.${i}`).getBoundingClientRect().top > 10
      ) {
        window.scrollTo(0, $(`.${i}`).offsetTop);
      }
    });
  }

  if (!location.href.match(/#/g)) {
    $("#home").click();
  }

  window.addEventListener("scroll", e => {
    // window.pageYOffset
    // window.innerHeight
    let url = new URL(location.href);

    for (let i = 0; i < elBtns.length; i++) {
      if (url.hash != `#${elBtns[i]}`) {
        let isVisible = isInViewport($(`.${elBtns[i]}`));
        if (isVisible) {
          url.hash = `#${elBtns[i]}`;
          window.history.replaceState(null, null, url.href);
        }
      }
    }
  });
  $(".home .btn").addEventListener("click", () => {
    $("dialog").style.setProperty("--visib", "inherit");
    $("dialog").showModal();
    $("body").style.overflow = "hidden";
  });
  $("dialog .dialog-box .close").addEventListener("click", () => {
    $("dialog").style.setProperty("--visib", "hidden");
    $("dialog").close();
    $("body").style.overflow = "auto";
  });
})();

function isInViewport(el) {
  let bound = el.getBoundingClientRect();
  return Math.abs(bound.top) <= bound.height / 2;
}

// $('.about').getBoundingClientRect()
