var header = document.getElementById("");
var navigation = document.getElementById("nav-links");
var content = document.getElementById("");
var showSideBar = false;

function toggleSidebar() {
  showSideBar = !showSideBar;
  if (showSideBar) {
    navigation.style.marginLeft = "0%";
  } else {
    navigation.style.marginLeft = "-200%";
  }
}
