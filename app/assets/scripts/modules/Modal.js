import { dropRight } from "lodash"

class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.events()
    }

    events() {
        // listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal());
        
        // pushes any key
        document.addEventListener("keyup", e => this.keyPressHandler(e));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal();
        }
    }

    openTheModal() {
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible")
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
    <div class="modal__inner">
    <picture>
        <source srcset="assets/images/chilli-plant.png 640w, assets/images/chilli-plant.png 3840w" media="(min-width: 1380px)">
        <!-- <source srcset="assets/images/hero--medium.jpg 1380w, assets/images/hero--medium-hi-dpi.jpg 2760w" media="(min-width: 990px)">
        <source srcset="assets/images/hero--small.jpg 990w, assets/images/hero--small-hi-dpi.jpg 1980w" media="(min-width: 640px)">  -->
        <img class="modal__picture" srcset="assets/images/chilli-plant.png 640w, assets/images/chilli-plant.png 1280w" alt="Flower Form blue conditioner bottle with circular tactile indicators">
    </picture>
      <h2 class="section-title section-title--orange section-title--less-margin">Get in touch</h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
      </div>

      <div class="social-icons">
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
        `)
    }
    
}

export default Modal