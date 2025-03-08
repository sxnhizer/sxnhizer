document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");
    const muteButton = document.getElementById("mute-button");

    // Ожидание клика для входа
    document.getElementById("welcome-screen").addEventListener("click", function () {
        this.classList.add("hidden");
        document.getElementById("main-content").style.display = "flex";

        // Запуск видео со звуком
        video.muted = false;
        video.play().catch(() => console.log("Автозапуск видео заблокирован браузером"));
    });

    // Управление звуком видео через кнопку "Mute"
    muteButton.addEventListener("click", () => {
        video.muted = !video.muted;
        muteButton.querySelector("img").src = video.muted ? "img/mute-on.png" : "img/mute-off.png";
    });

    // Счетчик просмотров
    let views = localStorage.getItem("profileViews") || 0;
    views++;
    localStorage.setItem("profileViews", views);
    document.getElementById("viewCount").innerText = views;

    // Анимация заголовка
    const titleText = "-sxnhizer";
    let currentIndex = 0;
    let isDeleting = false;

    function updateTitle() {
        if (!isDeleting) {
            document.title = titleText.substring(0, currentIndex + 1);
            currentIndex++;
            if (currentIndex === titleText.length) {
                isDeleting = true;
                setTimeout(updateTitle, 750);
                return;
            }
        } else {
            document.title = titleText.substring(0, currentIndex - 1);
            currentIndex--;
            if (currentIndex === 0) {
                isDeleting = false;
                setTimeout(updateTitle, 750);
                return;
            }
        }
        setTimeout(updateTitle, 750);
    }

    document.title = "";
    updateTitle();

    // Печатающая строка
    const text = "воробьи писают стоя";
    let index = 0;
    let isDeletingText = false;

    function typeEffect() {
        const typingText = document.getElementById("typing-text");

        if (!isDeletingText) {
            typingText.innerText = text.substring(0, index + 1);
            index++;
            if (index === text.length) {
                isDeletingText = true;
                setTimeout(typeEffect, 1000);
                return;
            }
        } else {
            typingText.innerText = text.substring(0, index - 1);
            index--;
            if (index === 0) {
                isDeletingText = false;
                setTimeout(typeEffect, 1000);
                return;
            }
        }
        setTimeout(typeEffect, 100);
    }
    typeEffect();
});
