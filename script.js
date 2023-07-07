var portfolioNavigation = document.getElementById("portfolio-navigation");
var navigation = document.getElementById("nav-links");
var content = document.getElementById("main-page");
var showSideBar = false;

function toggleSidebar() {
  showSideBar = !showSideBar;
  if (window.innerWidth < 769 && showSideBar) {
    navigation.style.marginTop = "0%";
    navigation.style.animationName = "showSidebar";
    navigation.style.position = "fixed";
    portfolioNavigation.style.marginTop = "0px";
  } else {
    navigation.style.marginTop = "-500%";
    navigation.style.animationName = "";
    portfolioNavigation.style.marginTop = "20px";
  }
}

window.addEventListener("resize", (event) => {
  if (window.innerWidth > 769 && showSideBar) {
    toggleSidebar();
  }
});
