const main = document.querySelector("main");

let bloggerOneList = [];
let bloggerTwoList = [];
let bloggerThreeList = [];
let bloggerFourList = [];

// Remove List Item - Landing Page
main.addEventListener("click", function (event) {
  const target = event.target;
  bloggerTwoList =
  JSON.parse(localStorage.getItem("bloggerTwoList")) || bloggerTwoList;

  if (target.matches("button") === true) {
    const divId = target.parentElement.parentElement.parentElement.getAttribute("id");
    if (divId === "blogger-two") {
        const index = target.parentElement.getAttribute("data-index");
        console.log(`${divId} || Button || index ${index} || has been clicked`);
        bloggerTwoList.splice(index, 1);
        firstFlag = false;
        localStorage.removeItem("firstFlag");
        localStorage.setItem("bloggerTwoList", JSON.stringify(bloggerTwoList));
        renderListItems();
    }
    const index = target.parentElement.getAttribute("data-index");
    console.log(`${divId} || Button || index ${index} || has been clicked`);
  }
});

// Render List Item - Landing Page
function readLocalStorage() {
  const list = JSON.parse(localStorage.getItem("bloggerTwoList"));
  if (!list) {
    return [];
  } else {
    return list;
  }
}

// Store List Item - Landing/Blog Page
function storeTestData(list) {
  bloggerTwoList =
    JSON.parse(localStorage.getItem("bloggerTwoList")) || bloggerTwoList;

  if (list) {
    bloggerTwoList.push(list);
  }
  
  let checkFlag = localStorage.getItem("firstFlag");
  if (checkFlag === null) {
    firstFlag = true;
    localStorage.setItem("firstFlag", firstFlag);
    localStorage.setItem("bloggerTwoList", JSON.stringify(bloggerTwoList));
  }
}
