document.addEventListener("DOMContentLoaded", function () {
    // Получение и обновление количества просмотров
    let views = localStorage.getItem("profileViews") || 0;
    views++;
    localStorage.setItem("profileViews", views);
    document.getElementById("viewCount").innerText = views;

    // Ожидание клика для входа
    document.getElementById("welcome-screen").addEventListener("click", function () {
        this.classList.add("hidden");
        document.getElementById("main-content").style.display = "flex";

        // Запуск видео только после клика
        var video = document.getElementById("background-video");
        video.play().catch(() => console.log("Автозапуск видео заблокирован браузером"));

        // Автозапуск музыки после входа
        var music = document.getElementById("bg-music");
        music.volume = 0.5;
        music.play().catch(() => console.log("Автозапуск музыки заблокирован браузером"));
    });

    // Полное выключение звука (Mute)
    const muteButton = document.getElementById("mute-button");
    const audio = document.getElementById("bg-music");

    muteButton.addEventListener("click", () => {
        audio.muted = !audio.muted;
        muteButton.querySelector("img").src = audio.muted ? "img/mute-on.png" : "img/mute-off.png";
    });

    // Бегущая строка в <title>
    const titleText = "-sxnhizer"; // Текст тайтла
    let currentIndex = 0;
    let isDeleting = false; // Флаг стирания

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

    // Запуск анимации при загрузке страницы
    document.title = "";
    updateTitle();
});
document.addEventListener("DOMContentLoaded", function () {
    // Текст для печатающей строки
    const text = "воробьи писают стоя";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        const typingText = document.getElementById("typing-text");

        if (!isDeleting) {
            typingText.innerText = text.substring(0, index + 1);
            index++;

            if (index === text.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1000); // Пауза перед удалением
                return;
            }
        } else {
            typingText.innerText = text.substring(0, index - 1);
            index--;

            if (index === 0) {
                isDeleting = false;
                setTimeout(typeEffect, 1000); // Пауза перед повтором
                return;
            }
        }

        setTimeout(typeEffect, 100);
    }

    // Запуск эффекта печатания
    typeEffect();
});
