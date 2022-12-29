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
        <a
          className="AestheticClock-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </header>
    </div>
  );
}

export default App;
