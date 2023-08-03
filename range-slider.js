
rangeInput = document.querySelectorAll(".range-input input")
range = document.querySelector(".slider .progress");
min = document.querySelector('#min-price')
max = document.querySelector('#max-price')
priceGap = 1;
rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (minVal < maxVal) {
            min.innerHTML = minVal
            max.innerHTML = maxVal
        } else {
            if (e.target.className === "range-min") {
                min.innerHTML = maxVal

            } else {
                max.innerHTML = minVal

            }
        }

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

            minP = (((minVal / rangeInput[0].max) * 100) - 5);
            maxP = 94 - (maxVal / rangeInput[1].max) * 100

            if (minP + maxP < 74) {
                min.style.left = minP + "%";
                max.style.right = maxP + "%";
            }
        }
    });
});




rangeInputMobile = document.querySelectorAll(".range-input-mobile input")
rangeMobile = document.querySelector(".slider-mobile .progress-mobile");
minMobile = document.querySelector('#min-price-mobile')
maxMobile = document.querySelector('#max-price-mobile')
priceGapMobile = 1;
rangeInputMobile.forEach(input => {
    input.addEventListener("input", e => {
        let minValMobile = parseInt(rangeInputMobile[0].value),
            maxValMobile = parseInt(rangeInputMobile[1].value);

        if (minValMobile < maxValMobile) {
            minMobile.innerHTML = minValMobile
            maxMobile.innerHTML = maxValMobile
        } else {
            if (e.target.className === "range-min-mobile") {
                minMobile.innerHTML = maxValMobile

            } else {
                maxMobile.innerHTML = minValMobile
            }
        }

        if ((maxValMobile - minValMobile) < priceGapMobile) {
            if (e.target.className === "range-min-mobile") {
                rangeInputMobile[0].value = maxValMobile - priceGapMobile
            } else {
                rangeInputMobile[1].value = minValMobile + priceGapMobile;
            }
        } else {
            rangeMobile.style.left = ((minValMobile / rangeInputMobile[0].max) * 100) + "%";
            rangeMobile.style.right = 100 - (maxValMobile / rangeInputMobile[1].max) * 100 + "%";

            minPMobile = (((minValMobile / rangeInputMobile[0].max) * 100) - 5);
            maxPMobile = 94 - (maxValMobile / rangeInputMobile[1].max) * 100

            if (minPMobile + maxPMobile < 74) {
                minMobile.style.left = minPMobile + "%";
                maxMobile.style.right = maxPMobile + "%";
            }
        }
    });
});
