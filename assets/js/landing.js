const bloggerOneUlEL = document.querySelector("#blogger-one");
const bloggerTwoUlEL = document.querySelector("#blogger-two");
const bloggerThreeUlEL = document.querySelector("#blogger-three");
const bloggerFourUlEL = document.querySelector("#blogger-four");

// TODO: Create a function that builds an element and appends it to the DOM
function appendElementToDOM(list) {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const ul = document.createElement("ul");
    ul.classList.add("list-group", "list-group-flush");
    ul.setAttribute("id", "list-group");
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.setAttribute("id", "list-group-item");
    li.setAttribute("data-index", item.dataIndex);
    const p = document.createElement("p");
    p.textContent = item.title;
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("btn-close");
    button.setAttribute("id", "btn-close");
    button.setAttribute("aria-label", "Close");
    if (item.blogger === "bloggerOne") {
      bloggerOneUlEL.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
    } else if (item.blogger === "bloggerTwo") {
      bloggerTwoUlEL.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
    } else if (item.blogger === "bloggerThree") {
      bloggerThreeUlEL.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
    } else {
      bloggerFourUlEL.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
    }
  }
}

function readAllBlogger() {
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      let bloggerList = readBloggerOne();
      if (bloggerList.length === 1) {
        bloggerOneUlEL.children[2].remove();
        return;
      } else {
        appendElementToDOM(bloggerList);
      }
    } else if (i === 1) {
      let bloggerList = readBloggerTwo();
      if (bloggerList.length === 0) {
        bloggerTwoUlEL.children[2].remove();
        return;
      } else {
        appendElementToDOM(bloggerList);
      }
    } else if (i === 2) {
      let bloggerList = readBloggerThree();
      if (bloggerList.length === 1) {
        bloggerThreeUlEL.children[2].remove();
        return;
      } else {
        appendElementToDOM(bloggerList);
      }
    } else {
      let bloggerList = readBloggerFour();
      if (bloggerList.length === 1) {
        bloggerFourUlEL.children[2].remove();
        return;
      } else {
        appendElementToDOM(bloggerList);
      }
    }
  }
}

// Render Blogger One List
function renderBloggerOne() {
  let readBloggerOne = readBloggerOne();

  if (readBloggerOne.length === 0) {
    console.log("No list items to render");
    bloggerOneUlEL.children[2].remove();
    return;
  } else {
    console.log("List items exist");
    appendElementToDOM(readBloggerOne);
  }
}

// Render Blogger Two List
function renderBloggerTwo() {
  let bloggerTwo = readBloggerTwo();

  if (bloggerTwo.length === 0) {
    console.log("No list items to render");
    bloggerTwoUlEL.children[2].remove();
    return;
  } else {
    console.log("List items exist");
    appendElementToDOM(bloggerTwo);
  }
}

// Render Blogger Three List
function renderBloggerThree() {
  let readBloggerThree = readBloggerThree();

  if (readBloggerThree.length === 0) {
    console.log("No list items to render");
    bloggerThreeUlEL.children[2].remove();
    return;
  } else {
    console.log("List items exist");
    appendElementToDOM(readBloggerThree);
  }
}

// Render Blogger Four List
function renderBloggerFour() {
  let readBloggerFour = readBloggerFour();

  if (readBloggerFour.length === 0) {
    console.log("No list items to render");
    bloggerFourUlEL.children[2].remove();
    return;
  } else {
    console.log("List items exist");
    appendElementToDOM(readBloggerFour);
  }
}

// handle list addition
function handleListAddition() {
  let checkFlag = localStorage.getItem("firstFlag");

  if (checkFlag === null) {
    let list = {
      title: "An item",
      dataIndex: 0,
      blogger: "bloggerTwo",
    };
    storeTestData(list);
    readAllBlogger();
  } else {
    readAllBlogger();
  }
}

handleListAddition();
