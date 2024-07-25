const bloggerTwoUlEL = document.querySelector("#blogger-two");

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
      bloggerTwoUlEL.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
  }
}

// Render List Item from Local Storage
function renderListItems() {
  let list = readLocalStorage();
  if (list.length === 0) {
    console.log("No list items to render");
    bloggerTwoUlEL.children[2].remove();
    return;
  } else {
    console.log("List items exist");
    appendElementToDOM(list);
  }
}

// handle list addition
function handleListAddition() {
  let checkFlag = localStorage.getItem("firstFlag");

  if (checkFlag === null) {
    let list = {
      title: "An item",
      dataIndex: 0,
    };
    storeTestData(list);
    renderListItems();
  } else {
    renderListItems();
  }
}

handleListAddition();
