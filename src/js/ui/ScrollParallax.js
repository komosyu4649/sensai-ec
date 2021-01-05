export default class ScrollParallax {

    constructor () {
        // this.targets = document.querySelectorAll('.p-top-intro__item-img-item');
        this.tagets = null;
        // this.st = document.documentElement.scrollTop || document.body.scrollTop;
        this.rate = 0;
        this.posStart = 0;
        this.posEnd = 0;
        this.end = 0;
        this.windowHeight = window.innerHeight;
        console.log(this.windowHeight)
    }

    init() {
        this.setSelector();
        // this.setStyle();
        // this.st = document.documentElement.scrollTop || document.body.scrollTop;
        this.setPos();
    }

    setSelector() {
        this.targets = document.querySelectorAll('.js-scroll__parallax');
        for(let i = 0; i < this.targets.length; i++) {
            // console.log(this.targets[i]);
            // this.targets[i] = this.target;
            // this.targets[i].style.transform = `translateY${this.rate}px`;
            // console.log(this.target);
            // this.onScroll();
        }
    }

    setPos() {
        // this.posStart = 0;
        // this.posEnd = 0;
    }

    // setStyle() {
        
    // }

    onScroll() {
        this.st = document.documentElement.scrollTop || document.body.scrollTop;
        this.rate = this.st * .04;
        for(let i = 0; i < this.targets.length; i++) {
            // this.targets[i].style.transform = `translateY(${this.rate}px)`;
            // this.posStart = this.targets[i].getBoundingClientRect().top;
            // this.posEnd= this.targets[i].getBoundingClientRect().bottom;
            // console.log(this.posStart);
            // console.log(this.posEnd);
            this.target( i );
        }
    }

    target( index ) {
        // this.targets[index].style.transform = `translateY(${this.rate}px)`;
        this.posStart = this.targets[index].getBoundingClientRect().top;
        this.posEnd = this.targets[index].getBoundingClientRect().bottom;
        // console.log(this.posStart);
        // console.log(this.posEnd);
        // console.log(this.st);
        // if(this.st > this.posStart && this.st < this.posEnd) {
        //     this.targets[index].style.transform = `translateY(${(this.st) * .02}px)`;
        //     // alert(88)
        //     // console.log(this.st - this.posStart)
        // }
        // if(this.st > this.posStart) {
        //     this.targets[index].style.transform = `translateY(${(this.st - this.posStart) * .02}px)`;
        //     console.log(8)
        // }
        // if(this.posEnd < this.end) {
        //     this.targets[index].style.transform = `translateY(0px)`;
        // }
        if(this.windowHeight > this.posStart) {
            this.targets[index].style.transform = `translateY(${(this.st - this.posStart) * .02}px)`;
        }
        if(this.end > this.posEnd) {
            this.targets[index].style.transform = `translateY(0px)`;
        }
        // if(this.posEnd < this.end) {
        //     this.targets[index].style.transform = `translateY(0px)`;
        //     // alert(88)
        // }
        // else {
        //     this.targets[index].style.transform = `translateY(0px)`;
        //     // alert(88)
        // }
    }

}