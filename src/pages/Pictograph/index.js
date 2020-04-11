import React from "react";
import Header from "../../components/Header";
import TextBlock from "../../components/HeaderBlocks/TextBlock";
import { PAGE_RENDER_DATA } from "./constants";
import NestedList from "../../components/NestedList";
import Button from "@material-ui/core/Button";
import TextsmsIcon from "@material-ui/icons/Textsms";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import ReactGa from "react-ga";

const useStyles = makeStyles(() => {
  return {
    bottom: {
      paddingTop: "50px",
      textAlign: "center",
    },
  };
});

ReactGa.initialize(
  "UA-163329224-1",
  { testMode: process.env.NODE_ENV !== "production" } // eslint-disable-line  no-undef
);

const Pictograph = (props) => {
  const newTo = {
    pathname: "/convos",
    state: {
      backLink: "/" + props.gridName,
    },
  };
  const classes = useStyles();
  ReactGa.pageview(props.gridName);
  const pageContent = PAGE_RENDER_DATA[props.gridName] || {};
  return (
    <div>
      <Header backLink="/">
        <TextBlock>{pageContent.headerText}</TextBlock>
        <TextBlock align="right">
          <Link to={newTo} style={{ textDecoration: "none" }}>
            <Button
              key="conversations"
              startIcon={<TextsmsIcon />}
              style={{ border: "none", backgroundColor: "white" }}
            >
              Text
            </Button>
          </Link>
        </TextBlock>
      </Header>
      <NestedList listData={pageContent.pictographData} />
      {props.gridName !== "help" ? null : (
        <div className={classes.bottom}>
          <Link component={RouterLink} to="/team">
            Build Team
          </Link>
          {" / "}
          <Link component={RouterLink} to="/privacypolicy">
            Privacy Policy
          </Link>
        </div>
      )}
    </div>
  );
};

export default Pictograph;
