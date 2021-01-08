export default class ScrollParallax {

    constructor () {
        this.tagets = null;
        this.posStart = 0;
        this.posEnd = 0;
        this.end = 0;
        this.windowHeight = window.innerHeight;
    }

    init() {
        this.setSelector();
    }

    setSelector() {
        this.targets = document.querySelectorAll('.js-scroll__parallax');
    }

    onScroll() {
        this.st = document.documentElement.scrollTop || document.body.scrollTop;;
        for(let i = 0; i < this.targets.length; i++) {
            this.target( i );
        }
    }

    target( index ) {
        this.posStart = this.targets[index].getBoundingClientRect().top;
        this.posEnd = this.targets[index].getBoundingClientRect().bottom;
        if(this.windowHeight > this.posStart) {
            this.targets[index].style.transform = `translateY(${(this.windowHeight - this.posStart)  * this.targets[index].dataset.parallax}px)`;
            // this.targets[index].style.transform = `translateY(${(this.st - this.posStart) * this.targets[index].dataset.parallax}px)`;
        }
        if(this.windowHeight < this.posStart) {
            this.targets[index].style.transform = `none`;
        }
        if(this.end > this.posEnd) {
            this.targets[index].style.transform = `none`;
        }
    }

}