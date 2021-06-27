import React from "react";
import classNames from "../utils/class-names/index";

function PlayPauseButtons(props) {
  const { playPause, isTimerRunning, session, stopHandler } = props;

  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          {/* TODO: Implement stopping the current focus or break session. */}
          {/* TODO: Disable the stop button when there is no active session */}
          <button
            type="button"
            className="btn btn-secondary "
            data-testid="stop"
            title="Stop the session"
            onClick={stopHandler}
            disabled={!session}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayPauseButtons;