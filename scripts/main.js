var sidebarEle = document.querySelector(".sidebar-mobile");

var btnMobile = document.querySelector(".header-mobile");
console.log(sidebarEle, btnMobile);
var overlayEle = document.querySelector(".sidebar-mobile-overlay");
function hanldeMenu() {
  var open = sidebarEle.classList.contains("sidebar-mobile--open");
  console.log(open);
  if (!open) {
    sidebarEle.classList.add("sidebar-mobile--open");
  } else {
    sidebarEle.classList.remove("sidebar-mobile--open");
  }
}
btnMobile.addEventListener("click", () => hanldeMenu());
overlayEle.addEventListener("click", () => hanldeMenu());
