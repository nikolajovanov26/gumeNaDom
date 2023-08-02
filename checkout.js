buyerRadio = document.querySelectorAll('[data-buyer]')
personalData = document.querySelector('#personal-buyer')
companyData = document.querySelector('#company-buyer')
companyLabel = document.querySelector('[data-company-label]')

buyerRadio.forEach(radio => {
    radio.addEventListener('change', function (item) {
        personalData.classList.toggle('display-none')
        companyData.classList.toggle('display-none')
        companyLabel.classList.toggle('border-b-1')
    })
})