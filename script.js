var navigation = document.getElementById("nav-links");
var portfolioNavigation = document.getElementById("portfolio-navigation");
var content = document.getElementById("main-page");
var showSideBar = false;

function toggleSidebar() {
  showSideBar = !showSideBar;
  if (window.innerWidth < 797 && showSideBar) {
    navigation.style.marginTop = "0%";
    navigation.style.animationName = "showSidebar";
    navigation.style.position = "fixed";
    portfolioNavigation.style.marginTop = "0px";
  } else {
    navigation.style.marginTop = "-200%";
    portfolioNavigation.style.marginTop = "20px";
    navigation.style.animationName = "";
  }
}

window.addEventListener("resize", (event) => {
  if (window.innerWidth > 797 && showSideBar) {
    toggleSidebar();
  }
});
