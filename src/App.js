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
        <h1>AestheticClock macOs Screensaver</h1>
        {`${getCalendarComponent('hours')} ${getCalendarComponent('minutes')} ${getCalendarComponent('seconds')}`}
        <div className="footer-nudge">
          <a href="#AestheticClock-body" className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""> </a>
        </div>
      </header>
      <div id="AestheticClock-body">
        AestheticClock macOS Screensaver install:
        <ul>
          <li>
            <a href={process.env.PUBLIC_URL + '/AestheticClockSaver.zip'} className='AestheticClock-link' download>download</a>
          </li>
          <li>
            or via homebrew
            <pre>
              brew tap jonnyjohannes/aesthetic-clock-screensaver
              <br/>
              brew install aesthetic-clock-screensaver
            </pre>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default App;
