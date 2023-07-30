fetch("components/blog.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("blog").innerHTML = html;
    });