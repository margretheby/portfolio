import { hamburgerMenu, hamburgerMenuClose } from "./variables.js";

function checkedBox() {
    hamburgerMenu.addEventListener("click", () => {
        if(hamburgerMenu.checked) {
            hamburgerMenuClose.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        } else {
            hamburgerMenuClose.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        }
    })
} 

checkedBox(); 