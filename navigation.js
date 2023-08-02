fetch("components/navigation.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("navigation").innerHTML = html;

        mobileMenu = document.querySelector('[data-mobile-menu]')
        mobileMenuOpen = document.querySelector('[data-mobile-menu-open]')
        mobileMenuClose = document.querySelector('[data-mobile-menu-close]')

        mobileMenuOpen.addEventListener('click', function () {
            mobileMenu.classList.add('screen-m-display-flex')
        })

        mobileMenuClose.addEventListener('click', function () {
            mobileMenu.classList.remove('screen-m-display-flex')
        })

    });




