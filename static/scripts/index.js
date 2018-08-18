window.addEventListener('scroll', scrollFunction);
let goTopBtn = document.getElementById('scrollToTop');
goTopBtn.addEventListener('click', backToTop);

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}

function scrollFunction() {
    let goTopBtn = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }
}
