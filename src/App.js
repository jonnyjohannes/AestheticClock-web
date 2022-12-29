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
      </header>
      <p className="AestheticClock-body">
        AestheticClock macOS Screensaver: <a href='/AestheticClockSaver-older-mac.dmg' className='AestheticClock-link' download>older-mac</a> OR <a href='/AestheticClockSaver-newer-mac.dmg' className='AestheticClock-link' download>newer-mac</a>
      </p>
    </div>
  );
}

export default App;
