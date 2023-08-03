fetch("components/blog.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("blog").innerHTML = html;

        arrowLeftBlog = document.querySelector('[data-blog-left]');
        arrowRightBlog = document.querySelector('[data-blog-right]');
        sliderPanelBlog = document.querySelector('[data-blog-panel]');
        widthBlog = document.querySelector('[data-blog-content]').offsetWidth;
        slideBlog = 0;
        sliderDivsBlog = sliderPanelBlog.children

        arrowLeftBlog.addEventListener('click', function () {
            if (slideBlog === 0) {
                sliderPanelBlog.style.transition = 'all 0s'
                lastElementBlog = sliderDivsBlog[sliderDivsBlog.length - 1];
                sliderPanelBlog.style.translate = -1 * width + 'px'
                sliderPanelBlog.prepend(lastElementBlog)

                setTimeout(() => {
                    sliderPanelBlog.style.transition = 'all 0.2s'
                    sliderPanelBlog.style.translate = '0px'
                }, "1");

            } else {
                slideBlog--;
                sliderPanelBlog.style.translate = -1 * slideBlog * widthBlog + 'px'
            }
        })

        arrowRightBlog.addEventListener('click', function () {
            lengthBlog = sliderDivsBlog.length - 3;

            if (slideBlog === lengthBlog) {
                sliderPanelBlog.style.transition = 'all 0s'
                firstElementBlog = sliderDivsBlog[0];
                sliderPanelBlog.style.translate = -1 * (lengthBlog - 1) * widthBlog + 'px'
                sliderPanelBlog.append(firstElementBlog)

                setTimeout(() => {
                    sliderPanelBlog.style.transition = 'all 0.2s'
                    sliderPanelBlog.style.translate = -1 * lengthBlog * widthBlog + 'px'
                }, "1");

            } else {
                slideBlog++;
                sliderPanelBlog.style.translate = -1 * slideBlog * widthBlog + 'px'
            }
        })


    });