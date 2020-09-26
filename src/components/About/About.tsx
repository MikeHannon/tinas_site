import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Avatar,
  Divider,
} from '@material-ui/core';

import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

const About = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card style={{ marginTop: '100px' }}>
      <CardHeader
        avatar={
          <Avatar aria-label="philosophy" className={classes.avatar}>
            MP
          </Avatar>
        }
        title="My Philosophy"
      />

      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="h2"
          style={{ fontSize: '12px' }}
          align="center"
        >
          <i>
            All the world’s a stage,
            <br></br> And all the men and women merely players;
            <br></br>
            They have their exits and their entrances;
            <br></br>
            And one man in his time plays many parts.
          </i>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="h2"
          style={{
            fontSize: '10px',

            marginTop: '10px',
            marginBottom: '10px',
          }}
          align="center"
        >
          - William Shakespeare, As You Like It
        </Typography>
        <Divider></Divider>
        <br></br>
        <Typography variant="body2" color="textSecondary" component="p">
          Art is a fundamental tool to facilitate communication.<br></br>
          Faith in our partners allows us to reach otherwise unattainable
          heights.
        </Typography>
        <br></br>
        <Typography variant="body2" color="textSecondary" component="p">
          Theater is uniquely positioned to promote learning; actively and by
          observation, supporting risk taking in a safe environment. It can
          model the world as we would like it to be and point out flaws in a way
          that encourages us to see them. It’s a tool for self-expression and a
          voice for those otherwise unheard. It can make us laugh, cry, rage
          against but most importantly bring us together to share a moment in
          time that is forever ours intertwined.
        </Typography>
        <br></br>
      </CardContent>
    </Card>
  );
};

export default About;
