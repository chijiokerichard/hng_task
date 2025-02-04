

  function updateUTCtime() {
    const curDate = new Date();
    const Hours = curDate.getUTCHours();
    const Minutes = curDate.getUTCMinutes();
    const Seconds = curDate.getUTCSeconds();
  
    document.getElementById('utc-time').innerHTML = `${padZero(Hours)}:${padZero(Minutes)}:${padZero(Seconds)}`;
  }
  
  function padZero(time) {
    return (time < 10 ? '0' : '') + time;
  }
  
  setInterval(updateUTCtime, 1000);