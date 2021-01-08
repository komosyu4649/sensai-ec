export default class ScrollSwap {

    constructor() {
        this.target = document.querySelector('.p-producer-personal__block');
        // this.targetTop = this.target.getBoundingClientRect().top;
        this.targetTop = 0;
        this.top = 0;
        this.items = null;
        // this.item = null;
        this.st = document.documentElement.scrollTop || document.body.scrollTop;
    }
    
    init() {
        this.serSelector();
        this.setPosition();
    }

    serSelector() {
        this.items = document.querySelectorAll('.js-scroll__current');
        // for( let i = 0; i < this.items.length; i++ ) {
        //     this.item( i );
        // }
    }

    // item( index ) {
    //     this.itemsIndex = this.items[index];
    // }

    setPosition() {
        
    }

    onScroll() {
        this.targetTop = this.target.getBoundingClientRect().top;
        for( let i = 0; i < this.items.length; i++ ) {
            // this.item( i );
            if(this.targetTop < this.top) {
                this.items[i].classList.add('is-scroll__current');
                // this.target.addEventListener('scroll', () => {
                //     alert(88)
                // })
            }
        }
        // if(this.targetTop < this.top) {
        //     this.itemsIndex.classList.add('is-scroll__current');
        // }
    }

}