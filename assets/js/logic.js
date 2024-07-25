const userList = document.querySelector("#list-group");

// Remove List Item - Landing Page
userList.addEventListener("click", function (event) {
  const target = event.target;
  if (target.matches("button") === true) {
    const index = target.parentElement.getAttribute("data-index");
    console.log(`Button index ${index} has been clicked`);
  }
});

// Render List Item - Landing Page

// Store List Item - Landing/Blog Page

// Redirect to Blog Page - Landing Page
let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
