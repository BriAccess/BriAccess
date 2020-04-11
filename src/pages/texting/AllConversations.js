// React
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Custom Components
import Header from "../../components/Header";
import TextBlock from "../../components/HeaderBlocks/TextBlock";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Modal from "@material-ui/core/Modal";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

//Google Analytics
import ReactGa from "react-ga";
ReactGa.initialize('UA-163329224-1')
ReactGa.pageview('Texting');

const useStyles = makeStyles((theme) => ({
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

function AvailableConversation(props) {
  const newTo = {
    pathname: `/convos/${props.name}`,
    state: {
      backLink: props.twoBack,
    },
  };

  return (
    <Link to={newTo} style={{ textDecoration: "none" }}>
      <ListItemText
        divider={true}
        primary={props.name}
        secondary={props.date}
      />
    </Link>
  );
}

const AllConversations = (props) => {
  const classes = useStyles();
  const [convos, setConvos] = useState(
    JSON.parse(localStorage.getItem("convos")) || []
  );
  const [addConvoModal, setAddConvoModal] = useState(false);
  const [addConvoName, setAddConvoName] = useState("");
  const [addConvoNameValid, setAddConvoNameValid] = useState(false);

  useEffect(() => localStorage.setItem("convos", JSON.stringify(convos)));

  function updateAddConvoName(addConvoName) {
    let isValid = true;
    if (addConvoName === "") {
      isValid = false;
    } else {
      const i = convos.findIndex((convo) => convo.name === addConvoName);
      isValid = i === -1;
    }
    setAddConvoName(addConvoName);
    setAddConvoNameValid(isValid);
  }

  function addConvo() {
    if (addConvoNameValid) {
      setConvos(
        convos.concat([
          {
            name: addConvoName,
            date: new Date().toISOString().slice(0, 10),
          },
        ])
      );
      setAddConvoModal(false);
      setAddConvoName("");
      setAddConvoNameValid(false);
    }
  }

  const back = props.location.state ? props.location.state.backLink : "/";

  return (
    <div>
      <Header backLink={back}>
        <TextBlock>Conversations</TextBlock>
        <TextBlock align="right">
          <Button
            onClick={() => setAddConvoModal(true)}
            startIcon={<AddIcon />}
            style={{
              border: "none",
              backgroundColor: "white",
            }}
          >
            New
          </Button>
        </TextBlock>
      </Header>

      <Container maxWidth="md" justify="center" alignitems="center">
        <Modal
          open={addConvoModal}
          onClose={() => setAddConvoModal(false)}
          className={classes.modal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 500 }}
        >
          <Fade in={addConvoModal}>
            <div className={classes.paper}>
              <h2>Title</h2>
              <TextField
                id={
                  addConvoNameValid
                    ? "outline-basic"
                    : "outline-error-helper-text"
                }
                label="New Conversation"
                defaultValue={addConvoName}
                helperText={
                  addConvoNameValid
                    ? ""
                    : "Name cannot be empty or already exist"
                }
                variant="outlined"
                onChange={(e) => updateAddConvoName(e.target.value)}
              />
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={() => addConvo()}
              >
                Create
              </Button>
            </div>
          </Fade>
        </Modal>
        <List>
          {convos.map((convo) => (
            <AvailableConversation
              key={convo.name}
              name={convo.name}
              date={convo.date}
              twoBack={back}
            />
          ))}
        </List>
      </Container>
    </div>
  );
};

export default AllConversations;
