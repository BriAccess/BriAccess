// React
import React, { useState, useEffect } from "react";

// Custom Components
import Header from "../../components/Header";
import TextBlock from "../../components/HeaderBlocks/TextBlock";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  container: {
    height: "calc(100vh - 60px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textInput: {
    display: "flex",
    background: "white",
    position: "sticky",
    bottom: 0,
    right: 0,
    padding: "5px",
  },
  textField: {
    flexGrow: 1,
  },
  rightSide: {
    alignSelf: "flex-end",
    backgroundColor: "#3f51b580",
  },
  leftSide: {
    backgroundColor: "#f500574a",
  },
  message: {
    maxWidth: "200px",
    borderRadius: "30px",
    border: "1px black solid",
    margin: "5px",
  },
  messages: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Conversation = (props) => {
  const classes = useStyles();
  const title = props.match.params.name;
  const key = "convo/" + title;
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem(key)) || []
  );
  const [newMessage, setNewMessage] = useState("");

  function handleAddNewMessage(rightSide) {
    if (!newMessage) return;
    setMessages(
      messages.concat([
        {
          content: newMessage,
          date: new Date().toISOString().slice(0, 10),
          rightSide,
        },
      ])
    );
    setNewMessage("");
  }

  useEffect(() => localStorage.setItem(key, JSON.stringify(messages)));
  const twoBack = props.location.state ? props.location.state.backLink : "/";

  return (
    <div>
      <Header backLink="." twoBack={twoBack}>
        <TextBlock>{title}</TextBlock>
        <TextBlock></TextBlock>
      </Header>
      <Container maxWidth="md" className={classes.container}>
        <List className={classes.messages}>
          {messages.map((message, i) => (
            <ListItem
              key={i}
              className={
                (message.rightSide ? classes.rightSide : classes.leftSide) +
                " " +
                classes.message
              }
            >
              <ListItemText
                primary={message.content}
                secondary={message.date}
                style={{ wordWrap: "break-word" }}
              />
            </ListItem>
          ))}
        </List>
        <div className={classes.textInput}>
          <IconButton
            variant="contained"
            color="secondary"
            onClick={() => handleAddNewMessage(false)}
          >
            <Icon>send</Icon>
          </IconButton>
          <TextField
            id="outlined-textarea"
            placeholder="Enter Message"
            multiline
            variant="outlined"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            className={classes.textField}
          />
          <IconButton
            variant="contained"
            color="primary"
            onClick={() => handleAddNewMessage(true)}
          >
            <Icon>send</Icon>
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default Conversation;
