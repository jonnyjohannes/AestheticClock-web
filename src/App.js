import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getCalendarComponent(calendarComponent) {
    const calendarComponents = {
      'hours': Date.prototype.getHours,
      'minutes': Date.prototype.getMinutes,
      'seconds': Date.prototype.getSeconds
    }

    return calendarComponents[calendarComponent].call(time).toString().padStart(2, 0);
  };

  return (
    <div className="AestheticClock">
      <header className="AestheticClock-header">
        {`${getCalendarComponent('hours')} ${getCalendarComponent('minutes')} ${getCalendarComponent('seconds')}`}
        <div class="footer-nudge">
          <a href="#AestheticClock-body" class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
        </div>
      </header>
      <div id="AestheticClock-body">
        <p>
          AestheticClock macOS Screensaver: <a href='/AestheticClockSaver.zip' className='AestheticClock-link' download>download</a>
        </p>
      </div>
    </div>
  );
}

export default App;
