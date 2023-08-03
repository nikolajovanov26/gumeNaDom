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

        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
            dropdown.addEventListener('mouseenter', function (item) {
                item.target.querySelector('.navigation-dropdown-div').classList.remove('display-none')
            })

            dropdown.addEventListener('mouseleave', function (item) {
                item.target.querySelector('.navigation-dropdown-div').classList.add('display-none')
            })
        })

        document.addEventListener("mouseenter", function(event) {
            document.querySelectorAll('.navigation-dropdown-div').forEach(dropdown => {
                if (!dropdown.contains(event.target) && !dropdown.parentElement.contains(event.target) ) {
                    dropdown.classList.add('display-none')
                }
            })
        });


    });