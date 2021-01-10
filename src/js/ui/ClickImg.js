export default class ClickImg {

    constructor() {
        this.items = null;
        this.imgs = null;
        this.imgList = null;
        this.imgSrcs = null;
        this.contents = null;
    }

    init() {
        this.setSelector();
        this.onClick();
    }

    setSelector() {
        this.items = document.querySelectorAll('.p-purchase-product__item');
        for( let i = 0; i < this.items.length; i++ ) {
            this.item(i);
        }
        // this.imgsList = document.querySelectorAll('.p-purchase-product__item-main-imgs');
        // for( let i = 0; i < this.imgsList.length; i++ ) {
        //     this.imgItem(i)
        // }
    }

    item(index) {
        this.itemsIndex = this.items[index];
        this.imgsList = document.querySelectorAll('.p-purchase-product__item-main-imgs');
        for( let i = 0; i < this.imgsList.length; i++ ) {
            // this.imgItem(i)
            // console.log(i)
        }
    }

    // img(index) {
    //     // this.imgsIndex = this.imgs[index];
    //     // console.log(this.imgsIndex)
    // }

    // imgItem(index) {
    //     this.imgItemIndex = this.imgsList[index];
    //     this.imgItemIndexChilds = this.imgItemIndex.children;
    //     this.imgLg = this.imgItemIndex.firstElementChild;
    //     this.imgLgChild = this.imgLg;
    //     console.log(this.imgLgChild);
    //     this.imgLgSrc = this.imgLg.getAttribute('src');
    //     for(let i = 0; i < this.imgItemIndexChilds.length; i++) {
    //         this.imgItemIndexChild;
    //         this.imgItemChild = this.imgItemIndexChilds[i];
    //         this.imgItemChild.addEventListener('click', (e) => {
    //             this.imgLg.setAttribute('src', `${e.currentTarget.getAttribute('src')}`);
    //         });
    //         this.imgLg.addEventListener('click', () => {
    //             this.imgLg.setAttribute('src', '/asset/img/purchase/product-negi-1.jpeg');
    //         })
    //     }
    // }

    imgItemIndexChild(index) {
        this.imgChild = this.imgItemIndexChilds[index];
        this.imgChildSrc = this.imgChild.getAttribute('src');
        console.log(this.imgChildSrc);
    }
    
    itemsIndex() {

    }

    onClick() {
        // console.log(this.imgLg);
        // this.imgChild.addEventListener('click', () => {
        //     this.imgLg.classList.add('pink');
        //     alert(88);
        // })
        this.imgsList;
        // console.log(this.imgsList);
        for(let i = 0; i < this.imgsList.length; i++) {
            this.imgItem = this.imgsList[i];
            this.imgLg = this.imgItem.firstElementChild;
            this.imgLgChild = this.imgLg.firstElementChild;
            this.imgLgChildSrc = this.imgLgChild.getAttribute('src');
        }
        
        // this.imgItemIndex = this.imgsList[index];
        // this.imgItemIndexChilds = this.imgItemIndex.children;
        // this.imgLg = this.imgItemIndex.firstElementChild;
        // this.imgLgChild = this.imgLg;
        // console.log(this.imgLgChild);
        // this.imgLgSrc = this.imgLg.getAttribute('src');
        // for(let i = 0; i < this.imgItemIndexChilds.length; i++) {
        //     this.imgItemIndexChild;
        //     this.imgItemChild = this.imgItemIndexChilds[i];
        //     this.imgItemChild.addEventListener('click', (e) => {
        //         this.imgLg.setAttribute('src', `${e.currentTarget.getAttribute('src')}`);
        //     });
        //     this.imgLg.addEventListener('click', () => {
        //         this.imgLg.setAttribute('src', '/asset/img/purchase/product-negi-1.jpeg');
        //     })
        // }
    }

}