import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const TextBlock = (props) => {
  const classes = makeStyles(() => {
    return {
      title: {
        flexGrow: 1,
      },
    };
  })();

  return (
    <Typography
      className={classes.title}
      align={props.align || "center"}
      variant="h6"
      onClick={props.onClick}
    >
      {props.children}
    </Typography>
  );
};

export default TextBlock;
