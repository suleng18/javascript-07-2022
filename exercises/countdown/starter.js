window.addEventListener('load', function (e) {
  const daysText = document.querySelector('.days');
  const hoursText = document.querySelector('.hours');
  const minutesText = document.querySelector('.minutes');
  const secondsText = document.querySelector('.seconds');
  // Sat Sep 24 2022 15:16:08 GMT+0700 (Giờ Đông Dương)
  // Sat Sep 30 2022 15:16:08 GMT+0700 (Giờ Đông Dương)

  function countdown(date) {
    const endDate = new Date(date).getTime();
    if (isNaN(endDate) || endDate <= 0) return;
    setInterval(calculate, 1000);
    function calculate() {
      let days, hours, minutes, seconds;
      const now = new Date();
      // convert to timestamp
      const startDate = now.getTime();
      // timeRemaining calulate to seconds
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      // 1 ngay = 24 * 60 * 60 = 86400 seconds
      // 1 hours = 60 * 60 = 3600 seconds

      if (timeRemaining > 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;

        hours = parseInt(timeRemaining / 3600);
        timeRemaining = parseInt(timeRemaining % 3600);

        minutes = parseInt(timeRemaining / 60);
        timeRemaining = parseInt(timeRemaining % 60);

        seconds = parseInt(timeRemaining);

        secondsText.textContent = `0${seconds}`.slice(-2);
        minutesText.textContent = `0${minutes}`.slice(-2);
        hoursText.textContent = `0${hours}`.slice(-2);
        daysText.textContent = `0${days}`.slice(-2);
      } else {
        return;
      }
    }
  }

  countdown('Sat Sep 30 2022 15:16:08 GMT+0700 (Giờ Đông Dương)');
});
