import React from "react";
import PropTypes from "prop-types";

const MouseOverContent = function ({ clientX, clientY }) {
  return (
    <div className="mouse-wrapper">
      {clientX && clientY && (
        <>
          <div className="x" style={{ top: `${clientY}px` }} />
          <div className="y" style={{ left: `${clientX}px` }} />
          <div
            className="center"
            style={{ top: `${clientY}px`, left: `${clientX}px` }}
          >
            <div />
          </div>
        </>
      )}
    </div>
  );
};

MouseOverContent.propTypes = {
  clientX: PropTypes.number.isRequired,
  clientY: PropTypes.number.isRequired,
};

export default MouseOverContent;
