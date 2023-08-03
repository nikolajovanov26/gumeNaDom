compareDropdowns = document.querySelectorAll('.mobile-compare-title')

compareDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function (item) {
        dropdown.querySelector('img').style.transform =
            dropdown.querySelector('img').style.transform === ''
                ? 'rotateZ(180deg)'
                : '';

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