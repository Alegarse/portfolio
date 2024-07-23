document.addEventListener("DOMContentLoaded", function() {
    // Get Nav Language code 2 chars
    var userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.substring(0, 2);

    // Select All h1 elements
    var headings = document.querySelectorAll("h1[data-lang]");

    // Only show user language
    headings.forEach(function(heading) {
        if (heading.getAttribute("data-lang") === userLang) {
            heading.classList.add("active");
        }
    });
});
