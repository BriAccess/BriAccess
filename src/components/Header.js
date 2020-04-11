import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import BackBlock from "./HeaderBlocks/BackBlock";

const useStyles = makeStyles(() => {
  return {
    root: {
      flexGrow: 1,
    },
  };
});

/* Children should be made up of at most 3 TextBlocks,
   2 if you have a back button 
*/
const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        {props.backLink ? (
          <BackBlock href={props.backLink} twoBack={props.twoBack} />
        ) : null}
        {props.children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
