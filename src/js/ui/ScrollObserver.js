// export default class ScrollObserver {

//     constructor() {
//         this.targets = null;
//         this.entries = null;
//         this.options = null;
//         this.observer = null;
//     }

//     init() {
//         this.setSelector();
//         // this.setEvent();
//         this.setObserver();
//     }

//     setSelector() {
//         this.targets = document.querySelectorAll('.js-scroll__obs');
//         // console.log(this.targets);
//         for(let i = 0; i < this.targets.length; i++) {
//             // console.log(this.targets[i])
//             // this.observer = new IntersectionObserver(callback, options);
//             this.observer.observe(this.targets[i]);
//         }
//     }



//     setObserver() {
//         this.observer = new IntersectionObserver(this.callback, options);
//     }

//     setOptions() {
//         this.options = {
//             root: null,
//             rootMargin: "0px",
//             threshold: 0,
//         }
//     }

//     setEntries() {
//         this.callback(this.entries) {
//             for(let i = 0; i < this.entries.length; i++) {
//                 // this.entries[i]
//                 console.log(88)
//             }
//         }
//     }

    
// }