export default class LoadFv {

    constructor() {
        this.target = document.querySelector('.js-load');
    }

    init() {

    }

    onLoad() {
        this.target.classList.add('is-load');
    }

}