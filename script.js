const semEndDate = "10 January 2022";
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function countdown(){
    const semEnd = new Date(semEndDate);
    const currentDate = new Date();
    let timeRemaining = (semEnd - currentDate)/1000;
    let remainingDays = Math.floor(timeRemaining/3600/24); //total milliseconds/3600 = hours /24= day
    let remainingHours = Math.floor((timeRemaining/3600) % 24);
    let remainingMinutes = Math.floor((timeRemaining/60) % 60);
    let remainingSeconds = Math.floor((timeRemaining)%60);

    days.innerHTML=remainingDays;
    hours.innerHTML = remainingHours;
    minutes.textContent=remainingMinutes;
    seconds.textContent=remainingSeconds;

}

countdown();
setInterval(countdown, 1000);
