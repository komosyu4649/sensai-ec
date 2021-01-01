const targets = document.querySelectorAll('.js-scroll__obs');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .4,
}

let observer = new IntersectionObserver(callback, options);

for(let i = 0; i < targets.length; i++) {
    observer.observe(targets[i]);
}

function callback(entries) {
    for(let i = 0; i < entries.length; i++) {
        if(entries[i].isIntersecting) {
            setEvent(entries[i].target)
        }
    }
}

function setEvent(target) {
    target.classList.add('is-scroll__obs');
    // const setTargets = document.querySelectorAll('.js-scroll__obs');
    // if(!setTargets) {
    //     return
    // }
    // for(let i = 0; i < setTargets.length; i++) {
    //     setTargets[i].classList.add('is-scroll__obs');
    // }
}