// All elements of class scroller
const scrollers = document.querySelectorAll('.scroller');

// Check for media query
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    // Add data attribute
    scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true)
        // Scroller preference is set to animated

        const scrollerInner = scroller.querySelector('.scroller__inner')
        const scrollerInnerContent = Array.from(scrollerInner.children)
        // Grab array of the scroller's children

        scrollerInnerContent.forEach((item)=>{
            const duplicatedItem = item.cloneNode(true)
            // Create copy of each item in the scroller children array
            duplicatedItem.setAttribute('aria-hidden', true)
            // Prevent screen readeres from detecting the duplicated items
            scrollerInner.appendChild(duplicatedItem)
            // Add duplicated items to the scroller
        })
    })
}