fetch("components/blog.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("blog").innerHTML = html;
    });

loadMore = document.querySelector('.load-more');
loadMore.addEventListener('click', function () {
    document.querySelectorAll('.show-more-mobile').forEach(card => card.classList.remove('show-more-mobile'))
    loadMore.style.display = 'none'
})