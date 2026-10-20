
document.addEventListener("DOMContentLoaded", function () {

    // Display current year
    document.querySelectorAll(".year").forEach(function (item) {
        item.textContent = new Date().getFullYear();
    });

    // 1. Welcome message
    window.welcomeUser = function () {
        let hour = new Date().getHours();
        let greeting;

        if (hour < 12) {
            greeting = "Good morning";
        } else if (hour < 18) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }

        document.getElementById("greeting").textContent =
            greeting + "! Welcome to my portfolio.";
    };

    // 2. Dark and Light Mode
    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
        }

        function updateThemeText() {
            themeBtn.textContent =
                document.body.classList.contains("dark")
                ? "☀️ Light Mode"
                : "🌙 Dark Mode";
        }

        updateThemeText();

        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark");

            localStorage.setItem(
                "theme",
                document.body.classList.contains("dark")
                    ? "dark"
                    : "light"
            );

            updateThemeText();
        });
    }

    // 3. Mobile navigation
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", function () {
            nav.classList.toggle("open");
        });
    }

    // 4. Read More / Show Less
    window.toggleInfo = function () {
        const info = document.getElementById("moreInfo");
        const button = info.previousElementSibling;

        info.hidden = !info.hidden;
        button.textContent = info.hidden
            ? "Read More"
            : "Show Less";
    };

    // 5. Project details
    window.showProject = function (project) {
        document.getElementById("projectDetails").textContent =
            "You selected: " + project +
            ". Replace this sample with your actual project details.";
    };

    // 6. Contact form demo
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;

            document.getElementById("formResult").textContent =
                "Thank you, " + name +
                "! Your demo message was received.";

            form.reset();
        });
    }

    // 7. Back to top
    window.backToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});
