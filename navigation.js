// Grabs the menu button and the nav list once so every step below can reuse them.
const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

//Marking the page as JS-enhanced. CSS only hides the list when this attribute exists,
//so with JS off every link can stay visible.
document.documentElement.dataset.enhanced ="true";

//Revealing the menu button. It ships with [hidden] so users with no JS never see 
// a button that does nothing.
button.hidden = false;


//Menu starts closed at narrow widths.
setMenuOpen(false);


//Opens or closes the menu in one place. Setting aria-expanded and data-open together means
//they can never disagree. 
function setMenuOpen(isOpen) {
    button.setAttribute("aria-expanded", String(isOpen));
    list.dataset.open = String(isOpen);
}


//Toggle on the button's click event. A native <button> click for mouse, touch, Enter and space,
//so no extra key handling is needed.
button.addEventListener("click", function () {
    const isOpen =
        button.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
});


//Closes menu on Escape, but only when the menu is open. Then moves focus back to the button so
//keyboard users aren't left on a link that just disappeared. 
document.addEventListener("keydown", function (event) {
    const isOpen =
        button.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
        setMenuOpen(false);
        button.focus();
    }
});


