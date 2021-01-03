import ScrollHeaderLine from "./ui/ScrollHeaderLine";
import ScrollHeaderScale from "./ui/ScrollHeaderScale";
// import ScrollObserver from "./ui/ScrollObserver";
import LoadFv from "./ui/LoadFv";
import "./ui/scrollObserve";

const scrollHeaderLine = new ScrollHeaderLine();
const scrollHeaderScale = new ScrollHeaderScale();
// const scrollObserver = new ScrollObserver();
const loadFv = new LoadFv();

scrollHeaderLine.init();
scrollHeaderScale.init();
// scrollObserver.init();
loadFv.init();


window.addEventListener('scroll', () => {
    scrollHeaderLine.onScroll();
    scrollHeaderScale.onScroll();
});

window.addEventListener('load', () => {
    loadFv.onLoad();
})