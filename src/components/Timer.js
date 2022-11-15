import React from 'react';
import useSound from 'use-sound';
import './Timer.css'

export default function Timer({time}) {

    const [[mins, secs], setTime] = React.useState([time.work_minutes, time.work_seconds]);  // Displayed time state
    const [paused, setPaused] = React.useState(true);  // Pause state
    const [productive, setProductive] = React.useState(true);  // Work-break state

    /**
     * Toggles pause state of timer
     */
    const onToggle = function() {
        if (paused) {
            setPaused(false);
            document.getElementById("button-toggle").innerText = "Stop";
        } else {
            setPaused(true);
            document.getElementById("button-toggle").innerText = "Start";
        }
    }

    /**
     * Resets the timer
     */
    const onReset = function() {
        setPaused(true);
        document.getElementById("button-toggle").innerText = "Start";
        document.getElementById("button-toggle").removeAttribute("disabled");
        setTime([time.work_minutes, time.work_seconds]);
    }

    /**
     * Ticks the timer forward
     */
     const tick = function() {
        if (mins === 0 && secs === 0) {
            if (productive) {
                setProductive(false);
                setTime([time.break_minutes, time.break_seconds]);
            } else {
                setProductive(true);
                setTime([time.work_minutes, time.work_seconds]);
            }
        } else if (secs === 0) {
            setTime([mins - 1, 59]);  // Minutes shift
        } else {
            setTime([mins, secs - 1]);  // Seconds shift
        }
    }

    // Allows the timer to run
    React.useEffect(function() {
        if (!paused) {
            const timerId = setInterval(function() { tick(); }, 1000);
            return function() { clearInterval(timerId); }
        } else {
            return function() { clearInterval(); }
        }
    });

    return (
        <div className="component-timer">

            {/* Clock */}

            <p className='text-timer'>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
            
            {/* Controls */}
            
            <div>
                <button className='button-toggle' id='button-toggle' onClick={onToggle}>Start</button>
                <button className='button-reset' onClick={onReset}>Reset</button>
            </div>
            
        </div>
    )
}
