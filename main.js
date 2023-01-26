let menuBurger = false;
if (window.innerWidth < 1000) {
  menuBurger = true;
} else {
  menuBurger = false;
}
let changeMenu = true;
let lastBurgerMenu = false;
let openMenuBurger = false;
const menuItems = new Array("O NAS", "Gdzie kupić", "Kontakt");
applyChangeMenu();

addEventListener("resize", (event) => {
  if (window.innerWidth < 1000) {
    menuBurger = true;
  } else {
    menuBurger = false;
  }
  if (menuBurger != lastBurgerMenu) {
    changeMenu = true;
  } else {
    changeMenu = false;
  }
  lastBurgerMenu = menuBurger;
  applyChangeMenu();
});

function applyChangeMenu() {
  if (changeMenu) {
    if (menuBurger) {
      let menuClassic = document.getElementById("menu-classic");
      let childMenuClassic = menuClassic.lastElementChild;
      while (childMenuClassic) {
        console.log(childMenuClassic);
        menuClassic.removeChild(childMenuClassic);
        childMenuClassic = menuClassic.lastElementChild;
      }
      let menu = document.getElementById("menu");
      imgBurger = document.createElement("img");
      imgBurger.src = "images/burger.png";
      imgBurger.addEventListener("click", openMenu);
      menu.appendChild(imgBurger);
      console.log("burger");
    } else {
      let menuClassic = document.getElementById("menu-classic");
      console.log(menuClassic);
      menuItems.forEach((element) => {
        let menuItem = document.createElement("div");
        let a = document.createElement("a");
        a.href = "index.html";
        a.innerHTML = element;
        menuItem.appendChild(a);
        menuItem.className = ["flex-item"];
        menuClassic.appendChild(menuItem);
      });
      let menu = document.getElementById("menu");
      let childMenu = menu.lastElementChild;
      while (childMenu) {
        menu.removeChild(childMenu);
        childMenu = menu.lastElementChild;
      }
      delChildMenuBurger();
    }
  }
  changeMenu = false;
}

function openMenu() {
  let menuBurgerItems = document.getElementById("menu-burger");
  openMenuBurger = !openMenuBurger;
  if (openMenuBurger) {
    menuItems.forEach((element) => {
      let menuItem = document.createElement("div");
      let a = document.createElement("a");
      a.href = "index.html";
      a.innerHTML = element;
      menuItem.appendChild(a);
      menuItem.className = ["menu-item-burger"];
      menuBurgerItems.appendChild(menuItem);
    });
  } else {
    let childMenuBurger = menuBurgerItems.lastElementChild;
    while (childMenuBurger) {
      console.log(childMenuBurger);
      menuBurgerItems.removeChild(childMenuBurger);
      childMenuBurger = menuBurgerItems.lastElementChild;
    }
  }
}

function delChildMenuBurger() {
  let menuBurgerItems = document.getElementById("menu-burger");
  let childMenuBurger = menuBurgerItems.lastElementChild;
  while (childMenuBurger) {
    console.log(childMenuBurger);
    menuBurgerItems.removeChild(childMenuBurger);
    childMenuBurger = menuBurgerItems.lastElementChild;
  }
}
