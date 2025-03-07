document.addEventListener("DOMContentLoaded", function () {
    let views = localStorage.getItem("profileViews") || 0;
    views++;
    localStorage.setItem("profileViews", views);
    document.getElementById("viewCount").innerText = views;

    // Ожидание клика для входа
    document.getElementById("welcome-screen").addEventListener("click", function () {
        this.classList.add("hidden");
        document.getElementById("main-content").style.display = "flex";

        // Автозапуск музыки после входа
        var music = document.getElementById("bg-music");
        music.volume = 0.5;
        music.play().catch(() => console.log("Автозапуск заблокирован браузером"));
    });

    // Ползунок громкости
    var volumeSlider = document.getElementById("volume-slider");
    var music = document.getElementById("bg-music");

    // Устанавливаем громкость при изменении ползунка
    volumeSlider.addEventListener("input", function () {
        music.volume = volumeSlider.value;
    });
});

// Создание следа за курсором
document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.classList.add("cursor-trail");
    document.body.appendChild(trail);

    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;

    setTimeout(() => {
        trail.remove();
    }, 400);
});
// Полное выключение звука
const muteButton = document.getElementById("mute-button");
const audio = document.getElementById("bg-music");

muteButton.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteButton.querySelector("img").src = audio.muted ? "img/mute-off.png" : "img/mute-on.png";
});
