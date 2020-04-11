// For the header
import React from "react";
import Header from "../components/Header";
import TextBlock from "../components/HeaderBlocks/TextBlock";

// For the profile cards
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { teamData } from "../logic/teamData";

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    margin: "30px",
    backgroundSize: "contain",
  },
  card: {
    height: "100%",
  },
  cardContent: {
    textAlign: "center",
  },
  cardActions: {
    justifyContent: "center",
  },
}));

const TeamPage = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Header backLink="/">
        <TextBlock>Team</TextBlock>
        <TextBlock></TextBlock>
      </Header>
      <div style={{ padding: "15px", textAlign: "left", flexGrow: 1 }}>
        <Grid container direction="row" justify="center" spacing={3}>
          {teamData.map((member) => {
            return (
              <Grid wrap="nowrap" key={member.name} item md={4} xs={12}>
                <Card className={classes.card}>
                  <CardMedia className={classes.media} image={member.img} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {member.bio}
                    </Typography>
                  </CardContent>
                  {member.links.map((link) => {
                    return (
                      <CardActions
                        key={link.href}
                        className={classes.cardActions}
                      >
                        <Button
                          size="small"
                          color="primary"
                          target="_blank"
                          href={link.href}
                        >
                          {link.title}
                        </Button>
                      </CardActions>
                    );
                  })}
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default TeamPage;
