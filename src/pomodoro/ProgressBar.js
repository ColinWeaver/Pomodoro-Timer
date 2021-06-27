import React from "react";

function ProgressBar(props) {
  const { width, session } = props;

  if (session) {
    return (
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={width()} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${width()}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default ProgressBar;