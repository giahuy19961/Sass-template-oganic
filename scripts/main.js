var btnMobile = document.querySelector(".header-mobile");
var overlayEle = document.querySelector(".sidebar-mobile-overlay");
var categoryEle = document.querySelector(".banner-menu-header");

function toggleCategory() {
  var categoryList = document.querySelector(".banner-menu-list");
  var closed = categoryList.classList.contains("banner-menu--closed");

  if (!closed) {
    categoryList.classList.add("banner-menu--closed");
  } else {
    categoryList.classList.remove("banner-menu--closed");
  }
}
// Handler toggle
function hanldeMenu() {
  var sidebarEle = document.querySelector(".sidebar-mobile");
  var open = sidebarEle.classList.contains("sidebar-mobile--open");

  if (!open) {
    sidebarEle.classList.add("sidebar-mobile--open");
    document.body.style.overflowY = "hidden";
  } else {
    sidebarEle.classList.remove("sidebar-mobile--open");
    document.body.style.overflowY = "visible";
  }
}

// Toggle on off side bar
btnMobile.addEventListener("click", () => hanldeMenu());
overlayEle.addEventListener("click", () => hanldeMenu());
// Toggle on off togleCategory
categoryEle.addEventListener("click", () => toggleCategory());
