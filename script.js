var portfolioNavigation = document.getElementById("portfolio-navigation");
var navigation = document.getElementById("nav-links");
var content = document.getElementById("main-page");
var portugueseBttn = document.querySelector("[data-brazil-flag]");
var showSideBar = false;

document.querySelector("[data-english-flag]").addEventListener("click", () => {
  document.querySelector(".portuguese").style.display = "none";
  document.querySelector(".english").style.display = "block";
  document.querySelector("[data-nav-logo]").textContent = "Me.me";
  document.querySelector("[data-nav-about]").textContent = "About";
  document.querySelector("[data-nav-technologies]").textContent =
    "Technologies";
  document.querySelector("[data-nav-projects]").textContent = "Projects";
  document.querySelector("[data-nav-contact]").textContent = "Contact";
  document.querySelector("[data-english-flag]").style.display = "none";
  document.querySelector("[data-brazil-flag]").style.display = "block";
});

if (portugueseBttn) {
  document.querySelector("[data-brazil-flag]").addEventListener("click", () => {
    document.querySelector(".portuguese").style.display = "block";
    document.querySelector(".english").style.display = "none";
    document.querySelector("[data-english-flag]").style.display = "block";
    document.querySelector("[data-brazil-flag]").style.display = "none";
  });
}

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
