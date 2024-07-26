const main = document.querySelector("main");
const button = document.querySelector("button");

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
    const divId =
      target.parentElement.parentElement.parentElement.getAttribute("id");
    if (divId === "blogger-one") {
      const index = target.parentElement.getAttribute("data-index");
      console.log(`${divId} || Button || index ${index} || has been clicked`);
    } else if (divId === "blogger-two") {
      const index = target.parentElement.getAttribute("data-index");
      console.log(`${divId} || Button || index ${index} || has been clicked`);
      bloggerTwoList.splice(index, 1);
      firstFlag = false;
      localStorage.removeItem("firstFlag");
      localStorage.setItem("bloggerTwoList", JSON.stringify(bloggerTwoList));
      readAllBlogger();
    } else if (divId === "blogger-three") {
      const index = target.parentElement.getAttribute("data-index");
      console.log(`${divId} || Button || index ${index} || has been clicked`);
    } else if (divId === "blogger-four") {
      const index = target.parentElement.getAttribute("data-index");
      console.log(`${divId} || Button || index ${index} || has been clicked`);
    }
  }
});

// Read Blogger One List
function readBloggerOne() {
  const readBloggerOne = JSON.parse(localStorage.getItem("bloggerOneList"));
  if (!readBloggerOne) {
    return [];
  } else {
    return readBloggerOne;
  }
}

// Read Blogger Two List
function readBloggerTwo() {
  const readBloggerTwo = JSON.parse(localStorage.getItem("bloggerTwoList"));
  if (!readBloggerTwo) {
    return [];
  } else {
    return readBloggerTwo;
  }
}

// Read Blogger Three List
function readBloggerThree() {
  const readBloggerThree = JSON.parse(localStorage.getItem("readBloggerThree"));
  if (!readBloggerThree) {
    return [];
  } else {
    return readBloggerThree;
  }
}

// Read Blogger Four List
function readBloggerFour() {
  const readBloggerFour = JSON.parse(localStorage.getItem("readBloggerFour"));
  if (!readBloggerFour) {
    return [];
  } else {
    return readBloggerFour;
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
