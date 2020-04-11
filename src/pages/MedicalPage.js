// For header
import React from "react";
import Header from "../components/Header.js";
import TextBlock from "../components/HeaderBlocks/TextBlock";

// For info list
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";

// For edit button
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

// For Send and Get Data tabs
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import CallMadeIcon from "@material-ui/icons/CallMade";

// For Other Information Description Modal
import HelpIcon from "@material-ui/icons/Help";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { getQRCodeLink } from "../logic/QRLogic.js";
import QrReader from "react-qr-reader";
import { Redirect } from "react-router-dom";

//Google Analytics
import ReactGa from "react-ga";
ReactGa.initialize('UA-163329224-1')
ReactGa.pageview('medical');

const localItems = [
  { name: "givenname", default: "Not Provided" },
  { name: "prefname", default: "Not Provided" },
  { name: "gender", default: "Not Provided" },
  { name: "birthday", default: "Not Provided", extraCheck: "0000-00-00" },
  { name: "bloodgroup", default: "Not Provided" },
  { name: "otherinfo", default: "None" },
  { name: "emcontacts", default: "None" },
];

// Set local storage
localItems.forEach((item) => {
  const localItem = localStorage.getItem(item.name);
  if (
    localItem === null ||
    localItem === "" ||
    (item.extraCheck && localItem === item.extraCheck)
  ) {
    localStorage.setItem(item.name, item.default);
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "50%",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  optionalBlock: {
    width: "100%",
  },
  bottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    color: "primary",
    textAlign: "center",
  },
  selected: {
    color: "secondary",
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
  media: {
    height: "200px",
    width: "300px",
    paddingTop: "56.25%",
  },
}));

// To keep track of active get or send data tab
var pastval = 3;

var QRCode = require("qrcode.react");

const MedicalPage = () => {
  const classes = useStyles();

  const [redirect, setRedirect] = React.useState(null);

  // Get Data and Send Data button states
  const [value, setValue] = React.useState("recents");

  // Handle QR popover change
  const handleChange = (event, newValue) => {
    // Compare to pastval to check which tab was previously active
    // Then set currently active tab
    if (pastval === 3) {
      pastval = newValue;
      setValue(newValue);
    } else if (pastval === newValue) {
      setValue(3);
      pastval = 3;
    } else {
      setValue(newValue);
      pastval = newValue;
    }
    // Deal with QR popup depending on newly active tab
    if (newValue === 1) {
      setOpensend(true);
    } else if (newValue === 0) {
      setOpenget(true);
    }
  };

  // To open and close Get Info Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // To open and close Send Data Modal
  const [opensend, setOpensend] = React.useState(false);
  const handleClosesend = () => {
    setOpensend(false);
    pastval = 3;
    setValue(3);
  };

  // To open and close Get Data Modal
  const [openget, setOpenget] = React.useState(false);
  const handleCloseget = () => {
    setOpenget(false);
    pastval = 3;
    setValue(3);
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div className={classes.root}>
      {/* Header */}
      <Header backLink="./">
        <TextBlock>Medical Information</TextBlock>
        <TextBlock align="right">
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            href="/medical/edit"
          >
            Edit
          </Button>
        </TextBlock>
      </Header>

      <Container maxWidth="md" justify="center" alignitems="center">
        {/* Info List */}
        <Grid>
          <List>
            {/* Given Name */}
            <ListItem>
              <ListItemText primary="Given Name: " />
              <TextField
                disabled
                value={localStorage.getItem("givenname")}
                variant="outlined"
                className={classes.textField}
              />
            </ListItem>
            {/* Preferred Name */}
            <ListItem>
              <ListItemText primary="Preferred Name: " />
              <TextField
                disabled
                value={localStorage.getItem("prefname")}
                variant="outlined"
                className={classes.textField}
              />
            </ListItem>
            {/* Gender */}
            <ListItem>
              <ListItemText primary="Gender: " />
              <TextField
                disabled
                value={localStorage.getItem("gender")}
                variant="outlined"
                className={classes.textField}
              />
            </ListItem>
            {/* Birthday */}
            <ListItem>
              <ListItemText primary="Birthday: " />
              <TextField
                disabled
                value={localStorage.getItem("birthday")}
                variant="outlined"
                className={classes.textField}
              />
            </ListItem>
            {/* Blood Group */}
            <ListItem>
              <ListItemText primary="Blood Group: " />
              <TextField
                disabled
                value={localStorage.getItem("bloodgroup")}
                variant="outlined"
                className={classes.textField}
              />
            </ListItem>
            {/* Other Information */}
            <ListItem>
              <ListItemText primary="Other Information: " />
              <button
                type="button"
                onClick={handleOpen}
                style={{ border: "none", backgroundColor: "white" }}
              >
                <HelpIcon />
              </button>
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
                    <h2>What does this include?</h2>
                    <p>
                      1. Serious medical conditions <br />
                      2. Allergies <br />
                      3. Medical History <br />
                      4. Current Medications <br />
                      Any other relevant information.
                    </p>
                  </div>
                </Fade>
              </Modal>
            </ListItem>
            <ListItem>
              <TextField
                disabled
                multiline
                value={localStorage.getItem("otherinfo")}
                variant="outlined"
                className={classes.optionalBlock}
              />
            </ListItem>
            {/* Emergency Contacts */}
            <ListItem>
              <ListItemText primary="Emergency Contacts: " />
            </ListItem>
            <ListItem>
              <TextField
                disabled
                multiline
                value={localStorage.getItem("emcontacts")}
                variant="outlined"
                className={classes.optionalBlock}
              />
            </ListItem>
            {/* Send Data Modal */}
            <ListItem>
              <Modal
                className={classes.modal}
                open={opensend}
                onClose={handleClosesend}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
              >
                <Fade in={opensend}>
                  <div className={classes.paper}>
                    <QRCode
                      id="123456"
                      value={getQRCodeLink(localItems.map((l) => l.name))}
                      size={290}
                      level={"H"}
                      includeMargin={true}
                    />
                  </div>
                </Fade>
              </Modal>
            </ListItem>
            {/* Get Data Modal */}
            <ListItem>
              <Modal
                className={classes.modal}
                open={openget}
                onClose={handleCloseget}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
              >
                <Fade in={openget}>
                  <div className={classes.paper}>
                    <Typography variant="h6">
                      Scan QR Code From Send Data
                    </Typography>
                    <QrReader
                      delay={300}
                      style={{ width: "75vmin" }}
                      onScan={(data) => {
                        if (data && data.startsWith("/load/"))
                          setRedirect(data);
                      }}
                      onError={() => console.log("an error has occurred")}
                    />
                  </div>
                </Fade>
              </Modal>
            </ListItem>
          </List>
        </Grid>
      </Container>

      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        className={classes.bottom}
      >
        <BottomNavigationAction label="Get Data" icon={<CallReceivedIcon />} />
        <BottomNavigationAction label="Send Data" icon={<CallMadeIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default MedicalPage;
