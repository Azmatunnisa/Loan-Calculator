import React from "react";
import PropTypes from "prop-types";

const DisplayChild = ({ func, text ,dat}) => {
  return (
    <span>
      {func} <small>{text}{dat}</small>
    </span>
  );
};

DisplayChild.defaultProps = {
  func: () => <p>Missing numeric value</p>,
  text: "No value provided",
  dat:[]
};

DisplayChild.propTypes = {
  func: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  dat : PropTypes.array.isRequired
};

export default DisplayChild;
