import React from "react";
import "../styles/LandingPage.css";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { useHistory, Link } from "react-router-dom";
import fireImage from "../assets/images/backgrounds/fire.png";
import emsImage from "../assets/images/backgrounds/ems.png";
import policeImage from "../assets/images/backgrounds/police.png";
import helpImage from "../assets/images/backgrounds/help.png";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextsmsIcon from "@material-ui/icons/Textsms";
import TextBlock from "../components/HeaderBlocks/TextBlock";
import TextField from "@material-ui/core/TextField";

//Google Analytics
import ReactGa from "react-ga";
ReactGa.initialize('UA-163329224-1')
ReactGa.pageview('Landing Page');

if (
  localStorage.getItem("identity") == null ||
  localStorage.getItem("identity") === ""
) {
  localStorage.setItem("identity", "I am Deaf");
}

const images = [
  {
    alt: "Fire",
    path: "/fire",
    src: fireImage,
  },
  {
    alt: "EMS",
    path: "/ems",
    src: emsImage,
  },
  {
    alt: "Police",
    path: "/police",
    src: policeImage,
  },
  {
    alt: "Help",
    path: "/help",
    src: helpImage,
  },
];

const useStyles = makeStyles((theme) => ({
  image: {
    position: "relative",
    height: "50%",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "50%",
    "&:hover": {
      zIndex: 1,
      "& $imageTitle": {
        border: "5px solid black",
      },
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFEB3B",
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px ${
      theme.spacing(1) + 2
    }px`,
    variant: "subtitle1",
    fontSize: "calc(10px + 2vmin)",
    backgroundColor: "black",
    opacity: ".8",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [showEditTextField, setEditTextField] = React.useState(false);
  const [showSavedTextField, setSavedTextField] = React.useState(true);

  return (
    <div className="App">
      <Header>
        <TextBlock>
          <Button
            key="medical"
            startIcon={<FavoriteIcon />}
            href="/medical"
            style={{ border: "none", backgroundColor: "white", float: "left" }}
          >
            Medical
          </Button>
        </TextBlock>
        <TextBlock>
          <Button
            key="identity"
            onClick={handleOpen}
            style={{
              border: "none",
              backgroundColor: "white",
              alignItems: "center",
              float: "50%",
            }}
          >
            Identity
          </Button>
        </TextBlock>
        <TextBlock align="right">
          <Link
            to={{
              pathname: "/convos",
              state: {
                backLink: "/",
              },
            }}
            style={{ textDecoration: "none" }}
          >
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

      <Grid className="Button-container">
        {images.map((image) => (
          <ButtonBase
            key={image.alt}
            className={classes.image}
            onClick={() => handleClick(image.path)}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <span key={image.alt} className={classes.imageButton}>
              <Typography
                component="span"
                key={image.alt}
                className={classes.imageTitle}
              >
                {image.alt}
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </Grid>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {showEditTextField && (
              <div>
                <TextField
                  defaultValue={localStorage.getItem("identity")}
                  style={{ padding: "15px" }}
                  onChange={function (event) {
                    localStorage.setItem("identity", event.target.value);
                  }}
                ></TextField>
                <br />
                <Button
                  variant="contained"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  style={{ float: "right" }}
                  onClick={() => {
                    setSavedTextField(!showSavedTextField);
                    setEditTextField(!showEditTextField);
                  }}
                >
                  Save
                </Button>
              </div>
            )}
            {showSavedTextField && (
              <div>
                <h1>{localStorage.getItem("identity")}</h1>
                <Button
                  variant="contained"
                  className={classes.button}
                  startIcon={<EditIcon />}
                  style={{ float: "right" }}
                  onClick={() => {
                    setEditTextField(!showEditTextField);
                    setSavedTextField(!showSavedTextField);
                  }}
                >
                  Edit
                </Button>
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default LandingPage;
