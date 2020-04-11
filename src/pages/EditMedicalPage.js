// For static header
import React from "react";
import Header from "../components/Header.js";
import TextBlock from "../components/HeaderBlocks/TextBlock";

// For list of medical info
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

// For each input field
import TextField from "@material-ui/core/TextField";

// For bloodgroup dropdown
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// Privacy Warning
import WarningIcon from "@material-ui/icons/Warning";

// For Saved Changes alert
import SaveIcon from "@material-ui/icons/Save";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "30%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  optionalBlock: {
    width: "100%",
  },
  saveChanges: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const EditMedicalPage = () => {
  const classes = useStyles();

  // To display Changes Saves alert
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // To display Privacy Icon
  const [openDP, setOpenDP] = React.useState(false);
  const handleClickDP = () => {
    setOpenDP(true);
  };
  const handleCloseDP = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenDP(false);
  };

  // To dynamically update the bloodgroup dropdown
  const [bloodgroup, setbloodgroup] = React.useState(
    localStorage.getItem("bloodgroup")
  );
  const handleChange = (event) => {
    setbloodgroup(event.target.value);
    localStorage.setItem("bloodgroup", event.target.value);
  };

  return (
    <div className={classes.root}>
      {/* Header */}
      <Header backLink="/medical">
        <TextBlock>Editing Medical Information</TextBlock>
      </Header>

      {/* Info List */}
      <Container maxWidth="md" justify="center" alignitems="center">
        <Grid>
          <List>
            {/* Given Name */}
            <ListItem>
              <ListItemText primary="Given Name: " />
              <TextField
                label="*Required"
                defaultValue={localStorage.getItem("givenname")}
                variant="outlined"
                onChange={function (event) {
                  localStorage.setItem("givenname", event.target.value);
                }}
                className={classes.textField}
              />
            </ListItem>
            {/* Preferred Name */}
            <ListItem>
              <ListItemText primary="Preferred  Name: " />
              <TextField
                label="*Required"
                defaultValue={localStorage.getItem("prefname")}
                variant="outlined"
                onChange={function (event) {
                  localStorage.setItem("prefname", event.target.value);
                }}
                className={classes.textField}
              />
            </ListItem>
            {/* Gender */}
            <ListItem>
              <ListItemText primary="Gender: " />
              <TextField
                label="*Required"
                defaultValue={localStorage.getItem("gender")}
                variant="outlined"
                onChange={function (event) {
                  localStorage.setItem("gender", event.target.value);
                }}
                className={classes.textField}
              />
            </ListItem>
            {/* Birthday */}
            <ListItem>
              <ListItemText primary="Birthday: " />
              <form>
                <TextField
                  defaultValue={localStorage.getItem("birthday")}
                  type="date"
                  variant="outlined"
                  inputlabelprops={{ shrink: true }}
                  onChange={function (event) {
                    localStorage.setItem("birthday", event.target.value);
                  }}
                  className={classes.textField}
                />
              </form>
            </ListItem>
            {/* Blood Group */}
            <ListItem>
              <ListItemText primary="Blood Group: " />
              <form>
                <FormControl
                  style={{ minWidth: 180 }}
                  className={classes.textField}
                >
                  <Select
                    value={bloodgroup}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    <MenuItem value={"A+"}>A+</MenuItem>
                    <MenuItem value={"A-"}>A-</MenuItem>
                    <MenuItem value={"B+"}>B+</MenuItem>
                    <MenuItem value={"B-"}>B-</MenuItem>
                    <MenuItem value={"O+"}>O+</MenuItem>
                    <MenuItem value={"O-"}>O-</MenuItem>
                    <MenuItem value={"AB+"}>AB+</MenuItem>
                    <MenuItem value={"AB-"}>AB-</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </ListItem>
            {/* Other Information */}
            <ListItem>
              <ListItemText primary="Other Information: " />
            </ListItem>
            <ListItem>
              <TextField
                multiline
                defaultValue={localStorage.getItem("otherinfo")}
                variant="outlined"
                className={classes.optionalBlock}
                onChange={function (event) {
                  localStorage.setItem("otherinfo", event.target.value);
                }}
              />
            </ListItem>
            {/* Emergency Contacts */}
            <ListItem>
              <ListItemText primary="Emergency Contacts: " />
            </ListItem>
            <ListItem>
              <TextField
                multiline
                defaultValue={localStorage.getItem("emcontacts")}
                variant="outlined"
                className={classes.optionalBlock}
                onChange={function (event) {
                  localStorage.setItem("emcontacts", event.target.value);
                }}
              />
            </ListItem>
            {/* Save Changes Button*/}
            <ListItem>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleClick}
              >
                Save
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  Your changes are saved as you type!
                </Alert>
              </Snackbar>
            </ListItem>
            {/* Privacy Warning*/}
            <ListItem>
              <Button
                variant="outlined"
                startIcon={<WarningIcon />}
                onClick={handleClickDP}
              >
                Data Privacy
              </Button>
              <Snackbar
                open={openDP}
                autoHideDuration={6000}
                onClose={handleCloseDP}
              >
                <Alert onClose={handleCloseDP} severity="warning">
                  Your data is private and is only stored locally.
                </Alert>
              </Snackbar>
            </ListItem>
          </List>
        </Grid>
      </Container>
    </div>
  );
};

export default EditMedicalPage;
