import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const BackBlock = (props) => {
  const newTo = {
    pathname: props.href,
    state: {
      backLink: props.twoBack,
    },
  };

  return (
    <Link to={newTo} style={{ flexGrow: "1", textAlign: "left" }}>
      <ArrowBackIcon
        className="header-icon send-left"
        style={{ color: "white" }}
      />
    </Link>
  );
};

export default BackBlock;
