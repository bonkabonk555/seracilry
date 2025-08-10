document.addEventListener("DOMContentLoaded", () => {
    // Inisialisasi AOS
    AOS.init({ offset: 0 });

    // Scroll button
    window.addEventListener("scroll", () => {
        let scrollBtn = document.querySelector(".scrollToTop-btn");
        if (scrollBtn) {
            scrollBtn.classList.toggle("active", window.scrollY > 500);
        }
    });

    // Menu button toggle
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");
    const navigationItems = document.querySelectorAll(".navigation a");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
    });

    // Sticky header
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    // Close menu saat link di klik
    navigationItems.forEach((item) => {
        item.addEventListener("click", () => {
            menuBtn.classList.remove("active");
            navigation.classList.remove("active");
        });
    });

    document.getElementById("buttonseemore").addEventListener("click", function(e) {
      console.log("See more clicked!");
      e.preventDefault()
    }); 
});
