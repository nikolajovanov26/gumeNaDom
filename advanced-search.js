toggle = document.querySelector('[data-advanced-toggle]')

toggle.addEventListener('change', function () {
    document.querySelector('.advance-filter').classList.toggle('display-none')
    document.querySelector('[data-hero-offer]').classList.toggle('display-none')
})

