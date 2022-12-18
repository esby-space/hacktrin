const countdown = () => {
    const timer = document.querySelector("#timer");
    if (!timer) return;
    const [days, hours, minutes, seconds] = timer.children;

    let difference = new Date("1/29/2023 9:00 AM").getTime() - new Date().getTime();
    setInterval(() => {
        seconds.innerHTML = `${Math.floor((difference % (1000 * 60)) / 1000)}`;
        minutes.innerHTML = `${Math.floor((difference % (1000 * 60 * 60)) / 1000 / 60)}`;
        hours.innerHTML = `${Math.floor((difference % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)}`;
        days.innerHTML = `${Math.floor(difference / 1000 / 60 / 60 / 24)}`;
        difference -= 1000;
    }, 1000);
};

countdown();
export {};
