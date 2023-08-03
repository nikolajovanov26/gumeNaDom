images = document.querySelectorAll('.product-gallery-image')
main = document.querySelector('[data-main-image]')
images.forEach(image => {
    image.addEventListener('click', function(item) {
        main.src = item.target.src

        if (!item.target.src) {
            main.src = item.target.querySelector('img').src
        }

        images.forEach(img => {
            if (img === item.target.parentElement) {
                img.classList.add('active')
            } else {
                img.classList.remove('active')
            }
        })
    })
})

quantityInput = document.querySelector('.quantityInput')
quantity = document.querySelector('[data-quantity]')
productPrice = document.querySelector('[data-product-price]')
totalPrice = document.querySelector('[data-total-price]')

quantity.innerHTML = 'x' + quantityInput.value
totalPrice.innerHTML = parseFloat(productPrice.innerText) * parseFloat(quantityInput.value) + '€'

quantityInput.addEventListener('change', function () {
    quantity.innerHTML = 'x' + quantityInput.value
    totalPrice.innerHTML = parseFloat(parseFloat(productPrice.innerText) * parseFloat(quantityInput.value)).toFixed(2)+ '€';
})

tabs = document.querySelectorAll('[data-tab]')


tabContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', function (item) {
        tabContent.forEach(content => {
            if (content === document.querySelector("[data-tab-content='" + tab.dataset.tab + "']")) {
                content.classList.remove('display-none')
            } else {
                content.classList.add('display-none')
            }
        })

        tabs.forEach(tb => {
            if (tb === tab) {
                tb.classList.add('active')
            } else {
                tb.classList.remove('active')
            }
        })
    });
})

mobileTabs = document.querySelectorAll('[data-tab-mobile]')

mobileTabs.forEach(tab => {
    tab.addEventListener('click', function (item) {
        mobileTabs.forEach(mbTab => {
            if (mbTab === tab) {
                mbTab.parentElement.querySelector('[data-tab-content-mobile]').classList.toggle('display-none')
            }
        })

        tab.classList.toggle('bg-gray-300')

        tab.querySelector('img').style.transform =
            tab.querySelector('img').style.transform === ''
                ? 'rotateZ(180deg)'
                : '';
    })
})