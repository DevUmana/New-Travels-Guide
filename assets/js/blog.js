const blogMain = document.querySelector("main");
const alert = document.querySelector(".success");

blogMain.addEventListener("click", function (event) {
  const target = event.target;
  if (target.matches("li") === true) {
    let blogger = target.getAttribute("data-blogger");
    let columns = target.getAttribute("data-columns");
    let dataIndex = target.getAttribute("data-index");
    let title = target.textContent;
    let id = blogger + columns + dataIndex;

    let list = {
      blogger: blogger,
      columns: columns,
      dataIndex: dataIndex,
      title: title,
      id: id,
    };
    console.log(
      `Blogger ${target.getAttribute(
        "data-blogger"
      )} || Column ${target.getAttribute(
        "data-columns"
      )} || index ${target.getAttribute("data-index")} || title ${
        target.textContent
      }`
    );
    displaySuccessMessage();
    storeTestData(list);
  }
});

function displaySuccessMessage() {
  alert.classList.add("show");
  setTimeout(function () {
    alert.classList.remove("show");
  }, 1000);
}

function hideSuccessMessage() {
  alert.classList.remove("show");
}

hideSuccessMessage();
