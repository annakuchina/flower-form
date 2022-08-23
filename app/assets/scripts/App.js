import '../styles/styles.css';
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/stickyHeader'

new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".process-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log("There was a problem."));
        } else {
            modal.openTheModal();
        }
    });
});

function displayWindowSize(){
    print("TOGGLING")
    // Get width of the window excluding scrollbars
    var siteHeader = document.querySelector(".site-header")
    var w = document.documentElement.clientWidth;
    if (w>799) {
        if (siteHeader.classList.contains("site-header--is-expanded") == True) {
            this.toggleTheMenu;
            print("MENU TOGGLED")
        }
    }
}
window.addEventListener("resize", displayWindowSize())



if (module.hot) {
    module.hot.accept();
}