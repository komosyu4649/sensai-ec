export default class ScrollSwap {

    constructor() {
        // this.target = document.querySelector('.p-producer-personal__block');
        // if(!this.target) return;
        // this.list = document.querySelector('.p-producer-personal__content-list');
        // if(!this.list) return;
        // this.img = document.querySelector('.p-producer-personal__img');
        // if(!this.img) return;
        // this.targetTop = 0;
        // this.top = 0;
        // this.windowHeight = window.innerHeight;
        // this.items = null;
    }
    
    init() {
        // this.serSelector();
        // this.setPosition();
    }

//     serSelector() {
//         this.items = document.querySelectorAll('.js-scroll__current');
//         for( let i = 0; i < this.items.length; i++ ) {
//             this.item( i );
//             this.onScroll( i )
//         }
//     }

//     item( index ) {
//         this.itemsIndex = this.items[index];
//     }

//     setPosition() {
        
//     }

//     onScroll() {
//         this.targetBottom = this.target.getBoundingClientRect().bottom;
//         if(!this.targetBottom) return;
//         this.targetTop = this.target.getBoundingClientRect().top;
//         if(!this.targetTop) return;
//         this.st = document.documentElement.scrollTop || document.body.scrollTop;
//         this.diff = this.windowHeight - this.targetBottom;
//         this.imgHeight = this.img.getBoundingClientRect().height;
//         this.imgTop = this.img.getBoundingClientRect().top;
//         if(this.windowHeight > this.imgTop) {
//             if((this.windowHeight - this.imgTop) > (this.imgHeight / 4) * 1) {
//                 this.items[3].classList.remove('is-scroll__current');
//                 this.items[2].classList.remove('is-scroll__current');
//                 this.items[1].classList.remove('is-scroll__current');
//                 this.items[0].classList.add('is-scroll__current');
//             }
//             if((this.windowHeight - this.imgTop) > (this.imgHeight / 4) * 2) {
//                 this.items[0].classList.remove('is-scroll__current');
//                 this.items[2].classList.remove('is-scroll__current');
//                 this.items[3].classList.remove('is-scroll__current');
//                 this.items[1].classList.add('is-scroll__current');
//             }
//             if((this.windowHeight - this.imgTop) > (this.imgHeight / 4) * 3) {
//                 this.items[1].classList.remove('is-scroll__current');
//                 this.items[0].classList.remove('is-scroll__current');
//                 this.items[3].classList.remove('is-scroll__current');
//                 this.items[2].classList.add('is-scroll__current');
//             }
//             if((this.windowHeight - this.imgTop) > (this.imgHeight / 4) * 4) {
//                 this.items[2].classList.remove('is-scroll__current');
//                 this.items[1].classList.remove('is-scroll__current');
//                 this.items[0].classList.remove('is-scroll__current');
//                 this.items[3].classList.add('is-scroll__current');
//             }
//         }
//     }

}