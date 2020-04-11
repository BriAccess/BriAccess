import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const defaultStyles = {
  root: {
    padding: 16,
    margin: "auto",
    maxWidth: 600,
  },
  question: {
    borderBottom: "2px solid black",
  },
  nested: {
    paddingLeft: 4,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "100%",
    height: 200,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "8px 16px",
  },
};

const NestedListItem = ({ primaryText, images, classes }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    if (images.length !== 0) {
      setOpen(!open);
    }
  };
  return (
    <div className={classes.question}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={primaryText} />
        {images.length !== 0 ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            {images.map((img) => (
              <div
                key={img}
                className={classes.image}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
};

NestedListItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  images: PropTypes.array,
  classes: PropTypes.object,
};

const NestedList = (props) => {
  const { listData, classes } = props;
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {listData.map((itemData, index) => (
        <NestedListItem
          key={index}
          classes={classes}
          index={index}
          {...itemData}
        />
      ))}
    </List>
  );
};

NestedList.propTypes = {
  listData: PropTypes.array.isRequired,
  classes: PropTypes.object,
};

export default withStyles(defaultStyles)(NestedList);
