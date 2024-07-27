const blogMain = document.querySelector('main');

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
            id: id
        }
        console.log(`Blogger ${target.getAttribute("data-blogger")} || Column ${target.getAttribute("data-columns")} || index ${target.getAttribute("data-index")} || title ${target.textContent}`);
        storeTestData(list);
    }
  });