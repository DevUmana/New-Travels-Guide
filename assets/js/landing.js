const bloggerOneUlEL = document.querySelector("#blogger-one");
const bloggerTwoUlEL = document.querySelector("#blogger-two");
const bloggerThreeUlEL = document.querySelector("#blogger-three");
const bloggerFourUlEL = document.querySelector("#blogger-four");
const myModal = document.getElementById('staticBackdrop')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// TODO: Create a function that builds an element and appends it to the DOM
function appendElementToDOM(list) {
  //Sorts the list by blogger, columns, and dataIndex
  list.sort(
    (a, b) =>
      a.blogger - b.blogger ||
      a.columns - b.columns ||
      a.dataIndex - b.dataIndex
  );

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "list-group-flush");
  ul.setAttribute("id", "list-group");

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.setAttribute("id", "list-group-item");
    li.setAttribute("data-blogger", item.blogger);
    li.setAttribute("data-columns", item.columns);
    li.setAttribute("data-index", item.dataIndex);
    li.setAttribute("data-id", item.id);
    const p = document.createElement("p");
    p.textContent = item.title;
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("btn-close");
    button.setAttribute("id", "btn-close");
    button.setAttribute("aria-label", "Close");
    if (item.blogger === "1") {
      bloggerOneUlEL.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
    } else if (item.blogger === "2") {
      bloggerTwoUlEL.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
    } else if (item.blogger === "3") {
      bloggerThreeUlEL.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
    } else if (item.blogger === "4") {
      bloggerFourUlEL.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
    }
  }
}

// Read all bloggers
function readAllBlogger() {
  renderBloggerOne();
  renderBloggerTwo();
  renderBloggerThree();
  renderBloggerFour();
}

// Render Blogger One List
function renderBloggerOne() {
  let readBloggerOneList = readBloggerOne();

  if (readBloggerOneList.length === 0) {
    return;
  } else {
    appendElementToDOM(readBloggerOneList);
  }
}

// Render Blogger Two List
function renderBloggerTwo() {
  let readBloggerTwoList = readBloggerTwo();

  if (readBloggerTwoList.length === 0) {
    return;
  } else {
    console.log("here 1");
    appendElementToDOM(readBloggerTwoList);
  }
}

// Render Blogger Three List
function renderBloggerThree() {
  let readBloggerThreeList = readBloggerThree();

  if (readBloggerThreeList.length === 0) {
    return;
  } else {
    appendElementToDOM(readBloggerThreeList);
  }
}

// Render Blogger Four List
function renderBloggerFour() {
  let readBloggerFourList = readBloggerFour();

  if (readBloggerFourList.length === 0) {
    return;
  } else {
    appendElementToDOM(readBloggerFourList);
  }
}

readAllBlogger();
