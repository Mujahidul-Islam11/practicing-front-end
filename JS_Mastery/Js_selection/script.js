// getElementById
// Used to select a single element by its id

const heading = document.getElementById("main-heading");
console.log(heading);

// querySelector
// Selects the first element that matches a CSS selector (e.g., #id, .class, tag).

const paragraph = document.querySelector(".my-paragraph");
console.log(paragraph.textContent);

// querySelectorAll
// Selects all elements that match a CSS selector and returns a NodeList (similar to an array).

const allItems = document.querySelectorAll(".item");
console.log(allItems);

allItems.forEach((item) => {
  console.log(item.textContent);
});
