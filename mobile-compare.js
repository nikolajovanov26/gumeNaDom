compareDropdowns = document.querySelectorAll('.mobile-compare-title')

compareDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function (item) {
        if(item.target.parentElement.querySelector('.mobile-compare-data')) {
            item.target.parentElement.querySelector('.mobile-compare-data').classList.toggle('display-none')

            return
        }

        parent = item.target.parentElement;

        if(parent.querySelector('.mobile-compare-data')) {
            item.target.parentElement.querySelector('.mobile-compare-data').classList.toggle('display-none')
        }
    })
})