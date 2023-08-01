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