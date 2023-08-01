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