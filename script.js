fetch("components/navigation.html")
    .then(response => response.text())
    .then(html => {
    document.getElementById("navigation").innerHTML = html;
});

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

async function fetchFooterAndAddEventListener() {
    try {
        const response = await fetch("components/footer.html");
        const html = await response.text();
        document.getElementById("footer").innerHTML = html;

        // Now that the footer content has been loaded, add the event listener.
        document.querySelector('#footer-main-menu').addEventListener('click', function () {
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
        });

        document.querySelector('#footer-fast-links').addEventListener('click', function () {
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

        });

        document.querySelector('#footer-my-account').addEventListener('click', function () {
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
        });
    } catch (error) {
        console.error('Error fetching footer:', error);
    }
}

// Call the function to start the process.
fetchFooterAndAddEventListener();

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "filter-select":*/
x = document.getElementsByClassName("filter-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);