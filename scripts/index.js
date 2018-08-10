window.onload = function () {
    window.addEventListener("scroll", scrollFunction);
    let goTopBtn = document.getElementById('scrollToTop');
    goTopBtn.addEventListener("click", backToTop);

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 0);
		}
	}

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollToTop").style.display = "block";
        } else {
            document.getElementById("scrollToTop").style.display = "none";
        }
    }
}
