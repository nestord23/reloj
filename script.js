function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeElement = document.getElementById("time");
    timeElement.textContent = `${hours}:${formatTime(minutes)}:${formatTime(seconds)}`;

    setTimeout(updateClock, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

updateClock();
