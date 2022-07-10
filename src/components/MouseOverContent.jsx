import React from "react";
import PropTypes from "prop-types";

const MouseOverContent = function ({ clientX, clientY }) {
  return (
    <div className="mouse-wrapper">
      <div className="x" style={{ top: `${clientY}px` }} />
      <div className="y" style={{ left: `${clientX}px` }} />
      <div className="center" />
    </div>
  );
};

MouseOverContent.propTypes = {
  clientX: PropTypes.number.isRequired,
  clientY: PropTypes.number.isRequired,
};

export default MouseOverContent;
