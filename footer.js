async function fetchFooterAndAddEventListener() {
    try {
        const response = await fetch("components/footer.html");
        const html = await response.text();
        document.getElementById("footer").innerHTML = html;

        currentPageUrl = window.location.href;

        footerLinks = document.querySelectorAll('.footer-link');

        footerLinks.forEach(function(link) {
            if (link.href === currentPageUrl) {
                // Add a class to the link to style it as the current page
                link.classList.add('footer-current-page');
            }
        });

        if (screen.width < 768) {
            document.querySelector('#footer-main-menu img').style.transform = 'rotate(-90deg)';
            document.querySelector('#footer-my-account img').style.transform = 'rotate(-90deg)';

            document.querySelector('#footer-main-menu-div').style.display = 'none';
            document.querySelector('#footer-my-account-div').style.display = 'none';
        }

        // Now that the footer content has been loaded, add the event listener.
        document.querySelector('#footer-main-menu').addEventListener('click', function () {
            if (screen.width < 768) {
                div = document.querySelector('#footer-main-menu-div');

                if (div.style.display === 'none') {
                    div.style.display = 'block';
                    document.querySelector('#footer-main-menu img').style.transform = 'rotate(0deg)';
                    setTimeout(function() {
                        div.style.height = '100%';
                    }, 100);
                } else {
                    document.querySelector('#footer-main-menu img').style.transform = 'rotate(-90deg)';
                    div.style.height = '0%';
                    setTimeout(function() {
                        div.style.display = 'none';
                    }, 230)
                }
            }
        });

        document.querySelector('#footer-fast-links').addEventListener('click', function () {
            if (screen.width < 768) {
                div = document.querySelector('#footer-fast-links-div');
                if (div.style.display === 'none') {
                    div.style.display = 'block';
                    document.querySelector('#footer-fast-links img').style.transform = 'rotate(0deg)';
                    setTimeout(function() {
                        div.style.height = '100%';
                    }, 100);
                } else {
                    document.querySelector('#footer-fast-links img').style.transform = 'rotate(-90deg)';
                    div.style.height = '0%';
                    setTimeout(function() {
                        div.style.display = 'none';
                    }, 230)
                }
            }
        });

        document.querySelector('#footer-my-account').addEventListener('click', function () {
            if (screen.width < 768) {
                div = document.querySelector('#footer-my-account-div');
                if (div.style.display === 'none') {
                    div.style.display = 'block';
                    document.querySelector('#footer-my-account img').style.transform = 'rotate(0deg)';
                    setTimeout(function() {
                        div.style.height = '100%';
                    }, 100);
                } else {
                    document.querySelector('#footer-my-account img').style.transform = 'rotate(-90deg)';
                    div.style.height = '0%';
                    setTimeout(function() {
                        div.style.display = 'none';
                    }, 230)
                }
            }
        });
    } catch (error) {
        console.error('Error fetching footer:', error);
    }
}

// Call the function to start the process.
fetchFooterAndAddEventListener();
