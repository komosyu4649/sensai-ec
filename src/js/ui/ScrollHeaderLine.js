export default class ScrollHeaderLine {

    constructor() {
        this.target = null;
        this.scrollTop = 0;
        this.pageHeight = 0;
    }

    init() {
        this.setSelector();
        this.getStyle();
        this.getHeight();
    }

    setSelector() {
        this.target = document.querySelector('.p-header__line');
    }

    getStyle() {
        this.headerStyleWidth = this.target.style.width = '0%';
    }

    getHeight() {
        this.pageHeight = document.documentElement.scrollHeight;
    }

    onScroll() {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.getHeight = `${100}%`;
        this.headerStyleWidth = this.target.style.width = `${this.scrollTop}px`;
    }

    onResize() {
        
    }



    
}