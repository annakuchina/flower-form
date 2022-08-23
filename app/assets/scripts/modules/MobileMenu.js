
class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.menuContent = document.querySelector(".site-header__menu-content")
        this.siteHeader = document.querySelector(".site-header")
        this.headerLinks = document.querySelectorAll(".siteheaderlink")
        this.menuToggled = false
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
        window.addEventListener("resize", () => this.displayWindowSize());

        this.headerLinks.forEach(siteheaderlink => siteheaderlink.addEventListener("click", () => this.checkClosedMenu()));
    }

    toggleTheMenu() {
        if (this.menuToggled == false) {
            this.menuToggled = true;
        } else {
            this.menuToggled = false;
        }
        this.menuContent.classList.toggle("site-header__menu-content--is-visible");
        this.siteHeader.classList.toggle("site-header--is-expanded");
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
        this.headerLinks.forEach(el => el.classList.toggle("site-header-link--expanded"))  
    }

    displayWindowSize(){
        // Get width of the window excluding scrollbars
        var siteHeader = document.querySelector(".site-header")
        var windowWidth = document.documentElement.clientWidth;
        if (windowWidth>799) {
            if (siteHeader.classList.contains("site-header--is-expanded") == true) {
                this.toggleTheMenu();
            }
        }
    }

    checkClosedMenu() {
        if (this.siteHeader.classList.contains("site-header--is-expanded") == true) {
            this.toggleTheMenu();
        }
    }

}

export default MobileMenu;


