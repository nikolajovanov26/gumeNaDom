arrowLeft = document.querySelector('[data-slider-left]');
arrowRight = document.querySelector('[data-slider-right]');
sliderPanel = document.querySelector('[data-slider-panel]');
width = document.querySelector('[data-slider-content]').offsetWidth;
slide = 0;
sliderDivs = sliderPanel.children

arrowLeft.addEventListener('click', function () {
    if (slide === 0) {
        sliderPanel.style.transition = 'all 0s'
        lastElement = sliderDivs[sliderDivs.length - 1];
        sliderPanel.style.translate = -1 * width + 'px'
        sliderPanel.prepend(lastElement)

        setTimeout(() => {
            sliderPanel.style.transition = 'all 0.2s'
            sliderPanel.style.translate = '0px'
        }, "1");

    } else {
        slide--;
        sliderPanel.style.translate = -1 * slide * width + 'px'
    }
})

arrowRight.addEventListener('click', function () {
    length = sliderDivs.length - 3;

    if (slide === length) {
        sliderPanel.style.transition = 'all 0s'
        firstElement = sliderDivs[0];
        sliderPanel.style.translate = -1 * (length - 1) * width + 'px'
        sliderPanel.append(firstElement)

        setTimeout(() => {
            sliderPanel.style.transition = 'all 0.2s'
            sliderPanel.style.translate = -1 * length * width + 'px'
        }, "1");

    } else {
        slide++;
        sliderPanel.style.translate = -1 * slide * width + 'px'
    }
})



arrowLeft2 = document.querySelector('[data-slider-left-2]');
arrowRight2 = document.querySelector('[data-slider-right-2]');
sliderPanel2 = document.querySelector('[data-slider-panel-2]');
width2 = document.querySelector('[data-slider-content-2]').offsetWidth;
slide2 = 0;
sliderDivs2 = sliderPanel2.children

arrowLeft2.addEventListener('click', function () {
    if (slide2 === 0) {
        sliderPanel2.style.transition = 'all 0s'
        lastElement2 = sliderDivs2[sliderDivs2.length - 1];
        sliderPanel2.style.translate = -1 * width + 'px'
        sliderPanel2.prepend(lastElement2)

        setTimeout(() => {
            sliderPanel2.style.transition = 'all 0.2s'
            sliderPanel2.style.translate = '0px'
        }, "1");

    } else {
        slide2--;
        sliderPanel2.style.translate = -1 * slide2 * width2+ 'px'
    }
})

arrowRight2.addEventListener('click', function () {
    length2 = sliderDivs2.length - 3;

    if (slide2 === length2) {
        sliderPanel2.style.transition = 'all 0s'
        firstElement2 = sliderDivs2[0];
        sliderPanel2.style.translate = -1 * (length2 - 1) * width2 + 'px'
        sliderPanel2.append(firstElement2)

        setTimeout(() => {
            sliderPanel2.style.transition = 'all 0.2s'
            sliderPanel2.style.translate = -1 * length2 * width2 + 'px'
        }, "1");

    } else {
        slide2++;
        sliderPanel2.style.translate = -1 * slide2 * width2 + 'px'
    }
})