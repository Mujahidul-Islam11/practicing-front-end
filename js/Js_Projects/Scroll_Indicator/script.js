let indicator = document.querySelector(".scroll_indicator .progress");

window.addEventListener("scroll", () => {
  // Update scrollHeight each time you scroll to handle dynamic content
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;

  // Calculate the percentage of scroll and update the width
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
});
