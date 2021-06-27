import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

function Titles({ focusDuration, breakDuration, isTimerRunning, session }) {
  
  function durationValue(focusDuration, breakDuration) {
    if (session?.label === "Focusing") return focusDuration;
    if (session?.label === "On Break") return breakDuration;
  }

  function paused() {
    if (!isTimerRunning) return "PAUSED";
  }

  if (session) {
    return (
      <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for{" "}
              {minutesToDuration(durationValue(focusDuration, breakDuration))}{" "}
              minutes
            </h2>
            <h2>{paused()}</h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default Titles;