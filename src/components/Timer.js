import React from 'react';
import './Timer.css'

export default function Timer({time}) {

    const { minutes = 0, seconds = 60 } = time;
    const [[mins, secs], setTime] = React.useState([minutes, seconds]);

    /**
     * Ticks the timer forward
     */
    const tick = function() {
        if (mins === 0 && secs === 0) {
            reset();  // Reset the clock
        } else if (secs === 0) {
            setTime([mins - 1, 59]);  // Minutes shift
        } else {
            setTime([mins, secs - 1]);  // Seconds shift
        }
    }
    
    /**
     * Resets the timer
     */
    const reset = function() {
        setTime([1, 0]);  // Sets the timer to 1 minute
    }

    // Allows the timer to run
    React.useEffect(function() {
        const timerId = setInterval(function() { tick(); }, 1000);
        return function() { clearInterval(timerId); }
    });

    return (
        <div className="component-timer">
            <p>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
        </div>
    )
}
