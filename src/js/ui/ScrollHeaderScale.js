export default class ScrollHeaderScale {

    constructor() {
        this.target = null;
    }

    init() {
        this.setSelector();
    }

    setSelector() {
        this.target = document.querySelector('.p-header');
    }

    onScroll() {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // this.target.classList.add('pink')
        if(this.scrollTop > 0) {
            this.target.classList.add('is-scroll')
        } else {
            this.target.classList.remove('is-scroll')
        }
    }

}