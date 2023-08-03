document.querySelector('#list-btn').addEventListener('click', function () {
    setList()
    document.querySelector('#list-btn').classList.add('active')
    document.querySelector('#grid-btn').classList.remove('active')
})

document.querySelector('#grid-btn').addEventListener('click', function () {
    setGrid()
    document.querySelector('#grid-btn').classList.add('active')
    document.querySelector('#list-btn').classList.remove('active')
})

function setList() {
    document.querySelectorAll('[data-collection]').forEach(item => item.classList.add('flex'));
    document.querySelectorAll('[data-collection]').forEach(item => item.classList.add('flex-col'));
    document.querySelectorAll('[data-collection]').forEach(item => item.classList.remove('product-search-grid'));
    document.querySelectorAll('[data-image]').forEach(item => item.classList.add('border-r-1'));
    document.querySelectorAll('[data-photo]').forEach(item => item.classList.remove('w-full'));
    document.querySelectorAll('[data-photo]').forEach(item => item.classList.remove('flex'));
    document.querySelectorAll('[data-image]').forEach(item => item.classList.remove('w-full'));
    document.querySelectorAll('[data-photo]').forEach(item => item.classList.remove('justify-center'));
    document.querySelectorAll('[data-img]').forEach(item => item.classList.add('w-259px'));
    document.querySelectorAll('[data-tag]').forEach(item => item.classList.remove('display-none'));
    document.querySelectorAll('[data-nf]').forEach(item => item.classList.add('w-full'));
    document.querySelectorAll('[data-nf]').forEach(item => item.classList.remove('p-12'));
    document.querySelectorAll('[data-np]').forEach(item => item.classList.add('pl-56'));
    document.querySelectorAll('[data-heading]').forEach(item => item.classList.add('text-21'));
    document.querySelectorAll('[data-heading]').forEach(item => item.classList.remove('text-18'));
    document.querySelectorAll('[data-text]').forEach(item => item.classList.add('text-16'));
    document.querySelectorAll('[data-text]').forEach(item => item.classList.remove('text-14'));
    document.querySelectorAll('[data-info]').forEach(item => item.classList.add('text-12'));
    document.querySelectorAll('[data-info]').forEach(item => item.classList.remove('text-9'));
    document.querySelectorAll('[data-info]').forEach(item => item.classList.remove('m-0'));
    document.querySelectorAll('[data-nm]').forEach(item => item.classList.add('mb-12'));
    document.querySelectorAll('[data-w]').forEach(item => item.classList.add('w-full'));
    document.querySelectorAll('[data-w]').forEach(item => item.classList.add('w-300px'));
    document.querySelectorAll('[data-col]').forEach(item => item.classList.remove('flex-col'));
    document.querySelectorAll('[data-column]').forEach(item => item.classList.remove('flex-col'));
    document.querySelectorAll('[data-col]').forEach(item => item.classList.remove('p-12'));
    document.querySelectorAll('[data-qty]').forEach(item => item.classList.remove('display-none'));
    document.querySelectorAll('[data-price]').forEach(item => item.classList.remove('flex'));
    document.querySelectorAll('[data-cart]').forEach(item => item.classList.add('mr-50'));
}

function setGrid() {
    document.querySelectorAll('[data-collection]').forEach(item => item.classList.remove('flex'));
    document.querySelectorAll('[data-collection]').forEach(item => item.classList.remove('flex-col'));
    document.querySelectorAll('[data-collection]').forEach(item => item.classList.add('product-search-grid'));
    document.querySelectorAll('[data-image]').forEach(item => item.classList.remove('border-r-1'));
    document.querySelectorAll('[data-photo]').forEach(item => item.classList.add('w-full'));
    document.querySelectorAll('[data-photo]').forEach(item => item.classList.add('flex'));
    document.querySelectorAll('[data-image]').forEach(item => item.classList.add('w-full'));
    document.querySelectorAll('[data-photo]').forEach(item => item.classList.add('justify-center'));
    document.querySelectorAll('[data-img]').forEach(item => item.classList.remove('w-259px'));
    document.querySelectorAll('[data-tag]').forEach(item => item.classList.add('display-none'));
    document.querySelectorAll('[data-nf]').forEach(item => item.classList.remove('w-full'));
    document.querySelectorAll('[data-nf]').forEach(item => item.classList.add('p-12'));
    document.querySelectorAll('[data-np]').forEach(item => item.classList.remove('pl-56'));
    document.querySelectorAll('[data-heading]').forEach(item => item.classList.remove('text-21'));
    document.querySelectorAll('[data-heading]').forEach(item => item.classList.add('text-18'));
    document.querySelectorAll('[data-text]').forEach(item => item.classList.remove('text-16'));
    document.querySelectorAll('[data-text]').forEach(item => item.classList.add('text-14'));
    document.querySelectorAll('[data-info]').forEach(item => item.classList.remove('text-12'));
    document.querySelectorAll('[data-info]').forEach(item => item.classList.add('text-10'));
    document.querySelectorAll('[data-info]').forEach(item => item.classList.add('m-0'));
    document.querySelectorAll('[data-nm]').forEach(item => item.classList.remove('mb-12'));
    document.querySelectorAll('[data-w]').forEach(item => item.classList.remove('w-full'));
    document.querySelectorAll('[data-w]').forEach(item => item.classList.remove('w-300px'));
    document.querySelectorAll('[data-col]').forEach(item => item.classList.add('flex-col'));
    document.querySelectorAll('[data-column]').forEach(item => item.classList.add('flex-col'));
    document.querySelectorAll('[data-col]').forEach(item => item.classList.add('p-12'));
    document.querySelectorAll('[data-qty]').forEach(item => item.classList.add('display-none'));
    document.querySelectorAll('[data-price]').forEach(item => item.classList.add('flex'));
    document.querySelectorAll('[data-cart]').forEach(item => item.classList.remove('mr-50'));
}

function changePagination(numberItems = 10)
{
    items = document.querySelectorAll('[data-col]');
    items.forEach(item => item.style.display = 'none')
    for (i = 0 ; i < numberItems; i++) {
        if (items[i]) {
            items[i].style.display = 'flex'
        }
    }
}

document.querySelectorAll('#pagination .select-items').forEach(selected => {
    selected.addEventListener('click', function (item) {
        number = item.target.innerText
        number = number.substring(0, number.indexOf(' '));


        changePagination(number)
    })
})

changePagination()

toggle = document.querySelector('[data-search-toggle]')
backButton = document.querySelector('[data-advanced-back]')
closeSearch = document.querySelector('[data-search-close]')
secondStepToggle = document.querySelector('[data-second-step-toggle]')
secondStep = document.querySelector('[data-second-step]')

backButton.addEventListener('click', function () {
    let event = new Event('change');
    secondStepToggle.dispatchEvent(event);
    secondStep.classList.add('display-none')
    secondStepToggle.checked = 0
})

toggle.addEventListener('change', function () {
    document.querySelector('.search-mobile').classList.remove('display-none')
})

closeSearch.addEventListener('click', function () {
    backButton.click()
    document.querySelector('.search-mobile').classList.add('display-none')

    toggle.checked = 0
})

secondStepToggle.addEventListener('change', function () {
    secondStep.classList.remove('display-none')
})

orderBtn = document.querySelector('[data-change-order]')
orderBtn.addEventListener('click', function () {
    orderBtn.classList.toggle('active')

    const parentDiv = document.querySelector('[data-collection]');

    parentDiv.style.opacity = 0.5;

    setTimeout(() => {
        const fragment = document.createDocumentFragment();

        while (parentDiv.lastElementChild) {
            fragment.appendChild(parentDiv.lastElementChild);
        }

        parentDiv.appendChild(fragment);

        parentDiv.style.opacity = 1;
    }, "500");

    changePagination(document.querySelector('#itemNumber').value)
})
