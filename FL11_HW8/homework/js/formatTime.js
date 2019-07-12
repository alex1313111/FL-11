function formatTime(num) {
    let day = Math.floor(num / 1440);
    let hour = Math.floor((num % 1440) / 60);
    let min = (num % 1440) % 60;
    return `${day} day(s) ${hour} hour(s) ${min} min(s) `;
}
formatTime(120);
formatTime(59);
formatTime(3601);
