toggle = document.querySelector('[data-advanced-toggle]')
advancedButton = document.querySelector('[data-advanced-button]')
backButton = document.querySelector('[data-advanced-back]')

advancedButton.addEventListener('click', function () {
    let event = new Event('change');
    toggle.dispatchEvent(event);
    document.querySelector('[data-advanced-toggle]').checked = !document.querySelector('[data-advanced-toggle]').checked

    if (window.outerWidth < 992) {
        document.querySelector('body').style.overflowY = 'hidden'
    }
})

backButton.addEventListener('click', function () {
    let event = new Event('change');
    toggle.dispatchEvent(event);
    document.querySelector('[data-advanced-toggle]').checked = 0
})

toggle.addEventListener('change', function () {
    document.querySelector('.advance-filter').classList.toggle('display-none')
    document.querySelector('[data-hero-offer]').classList.toggle('display-none')
})