import ScrollHeaderLine from "./ui/ScrollHeaderLine";
import ScrollHeaderScale from "./ui/ScrollHeaderScale";
// import ScrollObserver from "./ui/ScrollObserver";
import "./ui/scrollObserve";

const scrollHeaderLine = new ScrollHeaderLine();
const scrollHeaderScale = new ScrollHeaderScale();
// const scrollObserver = new ScrollObserver();

scrollHeaderLine.init();
scrollHeaderScale.init();
// scrollObserver.init();


window.addEventListener('scroll', () => {
    scrollHeaderLine.onScroll();
    scrollHeaderScale.onScroll();
})