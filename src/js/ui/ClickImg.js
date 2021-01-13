export default class ClickImg {

    constructor() {
        this.ImgsNegi = document.querySelector('.p-purchase-product__item-main-imgs__negi');
        if(!this.ImgsNegi) return;
        this.ImgsImo = document.querySelector('.p-purchase-product__item-main-imgs__imo');
        // this.ImgsTop = document.querySelectorAll('.p-purchase-product__item-main-img__top');
        this.ImgsNegiTop = this.ImgsNegi.querySelector('.p-purchase-product__item-main-img__top').firstElementChild;
        this.ImgsImoTop = this.ImgsImo.querySelector('.p-purchase-product__item-main-img__top').firstElementChild;
        this.ImgsNegiTopSrc = this.ImgsNegiTop.getAttribute('src');
        this.ImgsImoTopSrc = this.ImgsImoTop.getAttribute('src');
        // this.ImgsBottom = document.querySelectorAll('.p-purchase-product__item-main-img__bottom');
        this.contentsNegi = document.querySelector('.p-purchase-product__item-sub-list__negi');
        this.contentsImo = document.querySelector('.p-purchase-product__item-sub-list__imo');
        this.contentNegi = this.contentsNegi.children;
        this.contentImo = this.contentsImo.children;

        this.ImgsNegiChild = this.ImgsNegi.querySelectorAll('.p-purchase-product__item-main-img');
        for( let i = 0; i < this.ImgsNegiChild.length; i++ ) {
            this.ImgsNegiChild[i].addEventListener('click', (e) => {
                this.clear();
                e.target.parentNode.classList.add('is-click');
                this.ImgSrc = e.target.getAttribute('src');
                this.ImgsNegiTop.setAttribute('src', `${this.ImgSrc}`);
                for( let i = 0; i < this.contentNegi.length; i++ ) {
                    this.contentNegi[i];
                }
                if(this.ImgsNegiTop.getAttribute('src') === '/asset/img/purchase/product-negi-1.jpeg') {
                    this.contentNegi[0].classList.add('is-click');
                    this.contentNegi[1].classList.remove('is-click');
                    this.contentNegi[2].classList.remove('is-click');
                    this.contentNegi[3].classList.remove('is-click');
                }
                if(this.ImgsNegiTop.getAttribute('src') === '/asset/img/purchase/product-negi-2.jpeg') {
                    this.contentNegi[0].classList.remove('is-click');
                    this.contentNegi[1].classList.add('is-click');
                    this.contentNegi[2].classList.remove('is-click');
                    this.contentNegi[3].classList.remove('is-click');
                }
                if(this.ImgsNegiTop.getAttribute('src') === '/asset/img/purchase/product-negi-3.jpeg') {
                    this.contentNegi[0].classList.remove('is-click');
                    this.contentNegi[1].classList.remove('is-click');
                    this.contentNegi[2].classList.add('is-click');
                    this.contentNegi[3].classList.remove('is-click');
                }
                if(this.ImgsNegiTop.getAttribute('src') === '/asset/img/purchase/product-negi-4.jpeg') {
                    this.contentNegi[0].classList.remove('is-click');
                    this.contentNegi[1].classList.remove('is-click');
                    this.contentNegi[2].classList.remove('is-click');
                    this.contentNegi[3].classList.add('is-click');
                }
            });
        }
        this.ImgsNegiTop.addEventListener('click', () => {
            this.ImgsNegiTop.setAttribute('src', `${this.ImgsNegiTopSrc}`);
        })

        this.ImgsImoChild = this.ImgsImo.querySelectorAll('.p-purchase-product__item-main-img');
        for( let i = 0; i < this.ImgsImoChild.length; i++ ) {
            this.ImgsImoChild[i].addEventListener('click', (e) => {
                this.clear();
                e.target.parentNode.classList.add('is-click');
                this.ImgSrc = e.target.getAttribute('src');
                this.ImgsImoTop.setAttribute('src', `${this.ImgSrc}`);
                for( let i = 0; i < this.contentImo.length; i++ ) {
                    this.contentImo[i];
                }
                if(this.ImgsImoTop.getAttribute('src') === '/asset/img/purchase/product-imo-1.jpeg') {
                    this.contentImo[0].classList.add('is-click');
                    this.contentImo[1].classList.remove('is-click');
                    this.contentImo[2].classList.remove('is-click');
                    this.contentImo[3].classList.remove('is-click');
                }
                if(this.ImgsImoTop.getAttribute('src') === '/asset/img/purchase/product-imo-2.jpeg') {
                    this.contentImo[0].classList.remove('is-click');
                    this.contentImo[1].classList.add('is-click');
                    this.contentImo[2].classList.remove('is-click');
                    this.contentImo[3].classList.remove('is-click');
                }
                if(this.ImgsImoTop.getAttribute('src') === '/asset/img/purchase/product-imo-3.jpeg') {
                    this.contentImo[0].classList.remove('is-click');
                    this.contentImo[1].classList.remove('is-click');
                    this.contentImo[2].classList.add('is-click');
                    this.contentImo[3].classList.remove('is-click');
                }
                if(this.ImgsImoTop.getAttribute('src') === '/asset/img/purchase/product-imo-4.jpeg') {
                    this.contentImo[0].classList.remove('is-click');
                    this.contentImo[1].classList.remove('is-click');
                    this.contentImo[2].classList.remove('is-click');
                    this.contentImo[3].classList.add('is-click');
                }
            });
        }
        this.ImgsImoTop.addEventListener('click', () => {
            this.ImgsImoTop.setAttribute('src', `${this.ImgsImoTopSrc}`);
        })

        this.clear();
    }

    init() {
        // this.onClickNegi();
        // this.onClickImo();
        // this.clear();
    }

    clear() {
        for( let i = 0; i < this.ImgsNegiChild.length; i++ ) {
            this.ImgsNegiChild[i].classList.remove('is-click');
        } 
        for( let i = 0; i < this.ImgsImoChild.length; i++ ) {
            this.ImgsImoChild[i].classList.remove('is-click');
        } 
    }

    // onClickNegi() {
    //     this.ImgsNegiChild = this.ImgsNegi.querySelectorAll('.p-purchase-product__item-main-img');
    //     for( let i = 0; i < this.ImgsNegiChild.length; i++ ) {
    //         this.ImgsNegiChild[i].addEventListener('click', (e) => {
    //             this.clear();
    //             e.target.parentNode.classList.add('is-click');
    //             this.ImgSrc = e.target.getAttribute('src');
    //             this.ImgsNegiTop.setAttribute('src', `${this.ImgSrc}`);
    //             for( let i = 0; i < this.contentNegi.length; i++ ) {
    //                 this.contentNegi[i];
    //             }
    //             if(this.ImgsNegiTop.getAttribute('src') === '/asset/img/purchase/product-negi-1.jpeg') {
    //                 this.contentNegi[0].classList.add('is-click');
    //                 this.contentNegi[1].classList.remove('is-click');
    //                 this.contentNegi[2].classList.remove('is-click');
    //                 this.contentNegi[3].classList.remove('is-click');
    //             }
    //             if(this.ImgsNegiTop.getAttribute('src') === '/asset/img/purchase/product-negi-2.jpeg') {
    //                 this.contentNegi[0].classList.remove('is-click');
    //                 this.contentNegi[1].classList.add('is-click');
    //                 this.contentNegi[2].classList.remove('is-click');
    //                 this.contentNegi[3].classList.remove('is-click');
    //             }
    //             if(this.ImgsNegiTop.getAttribute('src') === '/asset/img/purchase/product-negi-3.jpeg') {
    //                 this.contentNegi[0].classList.remove('is-click');
    //                 this.contentNegi[1].classList.remove('is-click');
    //                 this.contentNegi[2].classList.add('is-click');
    //                 this.contentNegi[3].classList.remove('is-click');
    //             }
    //             if(this.ImgsNegiTop.getAttribute('src') === '/asset/img/purchase/product-negi-4.jpeg') {
    //                 this.contentNegi[0].classList.remove('is-click');
    //                 this.contentNegi[1].classList.remove('is-click');
    //                 this.contentNegi[2].classList.remove('is-click');
    //                 this.contentNegi[3].classList.add('is-click');
    //             }
    //         });
    //     }
    //     this.ImgsNegiTop.addEventListener('click', () => {
    //         this.ImgsNegiTop.setAttribute('src', `${this.ImgsNegiTopSrc}`);
    //     })
    // }

    // onClickImo() {
    //     this.ImgsImoChild = this.ImgsImo.querySelectorAll('.p-purchase-product__item-main-img');
    //     for( let i = 0; i < this.ImgsImoChild.length; i++ ) {
    //         this.ImgsImoChild[i].addEventListener('click', (e) => {
    //             this.clear();
    //             e.target.parentNode.classList.add('is-click');
    //             this.ImgSrc = e.target.getAttribute('src');
    //             this.ImgsImoTop.setAttribute('src', `${this.ImgSrc}`);
    //             for( let i = 0; i < this.contentImo.length; i++ ) {
    //                 this.contentImo[i];
    //             }
    //             if(this.ImgsImoTop.getAttribute('src') === '/asset/img/purchase/product-imo-1.jpeg') {
    //                 this.contentImo[0].classList.add('is-click');
    //                 this.contentImo[1].classList.remove('is-click');
    //                 this.contentImo[2].classList.remove('is-click');
    //                 this.contentImo[3].classList.remove('is-click');
    //             }
    //             if(this.ImgsImoTop.getAttribute('src') === '/asset/img/purchase/product-imo-2.jpeg') {
    //                 this.contentImo[0].classList.remove('is-click');
    //                 this.contentImo[1].classList.add('is-click');
    //                 this.contentImo[2].classList.remove('is-click');
    //                 this.contentImo[3].classList.remove('is-click');
    //             }
    //             if(this.ImgsImoTop.getAttribute('src') === '/asset/img/purchase/product-imo-3.jpeg') {
    //                 this.contentImo[0].classList.remove('is-click');
    //                 this.contentImo[1].classList.remove('is-click');
    //                 this.contentImo[2].classList.add('is-click');
    //                 this.contentImo[3].classList.remove('is-click');
    //             }
    //             if(this.ImgsImoTop.getAttribute('src') === '/asset/img/purchase/product-imo-4.jpeg') {
    //                 this.contentImo[0].classList.remove('is-click');
    //                 this.contentImo[1].classList.remove('is-click');
    //                 this.contentImo[2].classList.remove('is-click');
    //                 this.contentImo[3].classList.add('is-click');
    //             }
    //         });
    //     }
    //     this.ImgsImoTop.addEventListener('click', () => {
    //         this.ImgsImoTop.setAttribute('src', `${this.ImgsImoTopSrc}`);
    //     })
    // }

}