document.addEventListener('DOMContentLoaded', function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    const birthday = new Date("June 10, 2025 00:00:00").getTime();
  
    const countDown = setInterval(function () {
      const now = new Date().getTime();
      const distance = birthday - now;
  
      const daysRemaining = Math.floor(distance / day);
      const hoursRemaining = Math.floor((distance % day) / hour);
      const minutesRemaining = Math.floor((distance % hour) / minute);
      const secondsRemaining = Math.floor((distance % minute) / second);
  
      // Actualizar los elementos <span> dentro de cada <li>
      document.querySelector("#days span").textContent = daysRemaining;
      document.querySelector("#hours span").textContent = hoursRemaining;
      document.querySelector("#minutes span").textContent = minutesRemaining;
      document.querySelector("#seconds span").textContent = secondsRemaining;
  
      if (distance < 0) {
        document.getElementById("headline").innerText = "¡Feliz cumpleaños!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(countDown);
      }
    }, 1000);
  });