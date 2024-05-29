src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"
    integrity="sha512-VEBjfxWUOyzl0bAwh4gdLEaQyDYPvLrZql3pw1ifgb6fhEvZl9iDDehwHZ+dsMzA0Jfww8Xt7COSZuJ/slxc4Q=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"

    let tabs = document.querySelectorAll(".tab");
    let overlay = document.querySelector(".overlay");

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            tabs.forEach((tab) => {
                tab.classList.remove("tab-is-active");
            });
            this.classList.add("tab-is-active");
        });
    });