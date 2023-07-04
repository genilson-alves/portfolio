var header = document.getElementById("");
var navigation = document.getElementById("nav-links");
var portfolioNavigation = document.getElementById("portfolio-navigation");
var content = document.getElementById("");
var showSideBar = false;

function toggleSidebar() {
  showSideBar = !showSideBar;
  if (showSideBar) {
    navigation.style.marginLeft = "0%";
    portfolioNavigation.style.marginTop = "0px";
  } else {
    navigation.style.marginLeft = "-200%";
    portfolioNavigation.style.marginTop = "20px";
  }
}
