export default class LoadFv {

    constructor() {
        this.target = document.querySelector('.js-load');
        if (!this.target) return;
    }

    init() {

    }

    onLoad() {
        this.target.classList.add('is-load');
        
    }

}