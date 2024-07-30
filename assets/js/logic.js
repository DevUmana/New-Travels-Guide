const landingMain = document.querySelector("main");
const bloggerOneDiv = document.querySelector("#blogger-one");
const bloggerTwoDiv = document.querySelector("#blogger-two");
const bloggerThreeDiv = document.querySelector("#blogger-three");
const bloggerFourDiv = document.querySelector("#blogger-four");
const button = document.querySelector("button");

let bloggerOneList = [];
let bloggerTwoList = [];
let bloggerThreeList = [];
let bloggerFourList = [];

// Remove List Item - Landing Page
landingMain.addEventListener("click", function (event) {
  const target = event.target;

  bloggerOneList =
    JSON.parse(localStorage.getItem("bloggerOneList")) || bloggerOneList;
  bloggerTwoList =
    JSON.parse(localStorage.getItem("bloggerTwoList")) || bloggerTwoList;
  bloggerThreeList =
    JSON.parse(localStorage.getItem("bloggerThreeList")) || bloggerThreeList;
  bloggerFourList =
    JSON.parse(localStorage.getItem("bloggerFourList")) || bloggerFourList;

  if (target.matches("button") === true) {
    const divId =
      target.parentElement.parentElement.parentElement.getAttribute("id");
    if (divId === "blogger-one") {
      const index = target.parentElement.getAttribute("data-id");
      const findIndex = bloggerOneList.findIndex((item) => item.id === index);

      if (bloggerOneList.length === 1) {
        bloggerOneList = [];
      } else if (findIndex > -1) {
        bloggerOneList.splice(findIndex, 1);
      }
      localStorage.setItem("bloggerOneList", JSON.stringify(bloggerOneList));
      // clear ul element
      let ul = bloggerOneDiv.querySelector("ul");
      ul.remove();
      renderBloggerOne();
    } else if (divId === "blogger-two") {
      const index = target.parentElement.getAttribute("data-id");
      const findIndex = bloggerTwoList.findIndex((item) => item.id === index);

      if (bloggerTwoList.length === 1) {
        bloggerTwoList = [];
      } else if (findIndex > -1) {
        bloggerTwoList.splice(findIndex, 1);
      }
      localStorage.setItem("bloggerTwoList", JSON.stringify(bloggerTwoList));
      // clear ul element
      let ul = bloggerTwoDiv.querySelector("ul");
      ul.remove();
      renderBloggerTwo();
    } else if (divId === "blogger-three") {
      const index = target.parentElement.getAttribute("data-id");
      const findIndex = bloggerThreeList.findIndex((item) => item.id === index);

      if (bloggerThreeList.length === 1) {
        bloggerThreeList = [];
      } else if (findIndex > -1) {
        bloggerThreeList.splice(findIndex, 1);
      }
      localStorage.setItem(
        "bloggerThreeList",
        JSON.stringify(bloggerThreeList)
      );
      // clear ul element
      let ul = bloggerThreeDiv.querySelector("ul");
      ul.remove();
      renderBloggerThree();
    } else if (divId === "blogger-four") {
      const index = target.parentElement.getAttribute("data-id");
      const findIndex = bloggerFourList.findIndex((item) => item.id === index);

      if (bloggerFourList.length === 1) {
        bloggerFourList = [];
      } else if (findIndex > -1) {
        bloggerFourList.splice(findIndex, 1);
      }
      localStorage.setItem("bloggerFourList", JSON.stringify(bloggerFourList));
      // clear ul element
      let ul = bloggerFourDiv.querySelector("ul");
      ul.remove();
      renderBloggerFour();
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
  const readBloggerThree = JSON.parse(localStorage.getItem("bloggerThreeList"));
  if (!readBloggerThree) {
    return [];
  } else {
    return readBloggerThree;
  }
}

// Read Blogger Four List
function readBloggerFour() {
  const readBloggerFour = JSON.parse(localStorage.getItem("bloggerFourList"));
  if (!readBloggerFour) {
    return [];
  } else {
    return readBloggerFour;
  }
}

// Store List Item - Landing/Blog Page
function storeTestData(list) {
  bloggerOneList =
    JSON.parse(localStorage.getItem("bloggerOneList")) || bloggerOneList;
  bloggerTwoList =
    JSON.parse(localStorage.getItem("bloggerTwoList")) || bloggerTwoList;
  bloggerThreeList =
    JSON.parse(localStorage.getItem("bloggerThreeList")) || bloggerThreeList;
  bloggerFourList =
    JSON.parse(localStorage.getItem("bloggerFourList")) || bloggerFourList;

  if (list.blogger === "1") {
    let addList;

    for (let i = 0; i < bloggerOneList.length; i++) {
      if (bloggerOneList[i].title === list.title) {
        addList = false;
        return;
      } else {
        addList = true;
      }
    }
    if ((addList = true)) {
      bloggerOneList.push(list);
      localStorage.setItem("bloggerOneList", JSON.stringify(bloggerOneList));
      return;
    }
  } else if (list.blogger === "2") {
    let addList;

    for (let i = 0; i < bloggerTwoList.length; i++) {
      if (bloggerTwoList[i].title === list.title) {
        addList = false;
        return;
      } else {
        addList = true;
      }
    }
    if ((addList = true)) {
      bloggerTwoList.push(list);
      localStorage.setItem("bloggerTwoList", JSON.stringify(bloggerTwoList));
      return;
    }
  } else if (list.blogger === "3") {
    let addList;

    for (let i = 0; i < bloggerThreeList.length; i++) {
      if (bloggerThreeList[i].title === list.title) {
        addList = false;
        return;
      } else {
        addList = true;
      }
    }
    if ((addList = true)) {
      bloggerThreeList.push(list);
      localStorage.setItem(
        "bloggerThreeList",
        JSON.stringify(bloggerThreeList)
      );
      return;
    }
  } else if (list.blogger === "4") {
    let addList;

    for (let i = 0; i < bloggerFourList.length; i++) {
      if (bloggerFourList[i].title === list.title) {
        addList = false;
        return;
      } else {
        addList = true;
      }
    }
    if ((addList = true)) {
      bloggerFourList.push(list);
      localStorage.setItem("bloggerFourList", JSON.stringify(bloggerFourList));
      return;
    }
  }
}

let currentPage = document.body.classList[0];

// Highlight current page
function highlightCurrentPage(currentPage) {
  //gets the nav element
  console.log(currentPage);
  if (currentPage === "landing") {
    const nav = document.querySelector(".home");
    console.log(nav);
    console.log(typeof nav);
    nav.style.backgroundColor = "rgb(" + 196 + "," + 11 + "," + 11 + ")";
    nav.style.color = "rgb(" + 8 + "," + 53 + "," + 121 + ")";
  } else if (currentPage === "bloggerOne") {
    const nav = document.querySelector(".blog-1");
    console.log(nav);
    console.log(typeof nav);
    nav.style.backgroundColor = "rgb(" + 196 + "," + 11 + "," + 11 + ")";
    nav.style.color = "rgb(" + 8 + "," + 53 + "," + 121 + ")";
  } else if (currentPage === "bloggerTwo") {
    const nav = document.querySelector(".blog-2");
    console.log(nav);
    console.log(typeof nav);
    nav.style.backgroundColor = "rgb(" + 196 + "," + 11 + "," + 11 + ")";
    nav.style.color = "rgb(" + 8 + "," + 53 + "," + 121 + ")";
  } else if (currentPage === "bloggerThree") {
    const nav = document.querySelector(".blog-3");
    console.log(nav);
    console.log(typeof nav);
    nav.style.backgroundColor = "rgb(" + 196 + "," + 11 + "," + 11 + ")";
    nav.style.color = "rgb(" + 8 + "," + 53 + "," + 121 + ")";
  } else if (currentPage === "bloggerFour") {
    const nav = document.querySelector(".blog-4");
    console.log(nav);
    console.log(typeof nav);
    nav.style.backgroundColor = "rgb(" + 196 + "," + 11 + "," + 11 + ")";
    nav.style.color = "rgb(" + 8 + "," + 53 + "," + 121 + ")";
  }
}

highlightCurrentPage(currentPage);
