import React from "react";
import PropTypes from "prop-types";

const MouseMoveContent = function ({ clientX, clientY }) {
  if (clientX === 0 && clientY === 0) {
    return null;
  }
  return (
    <div className="mouse-wrapper">
      <div className="x" style={{ top: `${clientY}px` }} />
      <div className="y" style={{ left: `${clientX}px` }} />
      <div
        className="center"
        style={{ top: `${clientY}px`, left: `${clientX}px` }}
      >
        <div />
      </div>
    </div>
  );
};

MouseMoveContent.propTypes = {
  clientX: PropTypes.number.isRequired,
  clientY: PropTypes.number.isRequired,
};

export default MouseMoveContent;
