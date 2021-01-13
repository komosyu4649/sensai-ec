export default class ClickMenu {

    constructor() {
        this.trigger = document.querySelector('.p-header__btn');
        this.body = document.querySelector('#wrapper');
    }

    init() {
        this.onClick();
    }

    onClick() {
        this.trigger.addEventListener('click', () => {
            this.body.classList.toggle('is-click__Menu');
        })
    }
}