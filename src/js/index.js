import ScrollHeaderLine from "./ui/ScrollHeaderLine";
import ScrollHeaderScale from "./ui/ScrollHeaderScale";
import ScrollParallax from "./ui/ScrollParallax";
import ScrollSwap from "./ui/ScrollSwap";
// import ScrollObserver from "./ui/ScrollObserver";
import LoadFv from "./ui/LoadFv";
import "./ui/scrollObserve";

const scrollHeaderLine = new ScrollHeaderLine();
const scrollHeaderScale = new ScrollHeaderScale();
const scrollParallax = new ScrollParallax();
const scrollSwap = new ScrollSwap();
// const scrollObserver = new ScrollObserver();
const loadFv = new LoadFv();

scrollHeaderLine.init();
scrollHeaderScale.init();
scrollParallax.init();
scrollSwap.init();
// scrollObserver.init();
loadFv.init();


window.addEventListener('scroll', () => {
    scrollHeaderLine.onScroll();
    scrollHeaderScale.onScroll();
    scrollParallax.onScroll();
    // scrollSwap.onScroll();
    
});

window.addEventListener('load', () => {
    loadFv.onLoad();
})