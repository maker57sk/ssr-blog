import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import BlogPage from './BlogPage';
import Header from './Header';
import { Box, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  post: {
    maxWidth: 1000,
    alignItems: "center",
  },
  wraper: {
    direction: "row",
    justify: "space-between",
    alignItems: "center",
  },

})

const App = () => {

  const classes = useStyles();

  return (
  <Box>

    <Header />

    <Grid container
        direction="row"
        justify="space-between"
        alignItems="stretch"
      >
         <Grid item xs={1}>
          
        </Grid>

    <Grid item xs={9} className={classes.post}>

    <Switch>
      <Route path="/about" component={About} />
      <Route path="/blog/:id" component={BlogPage} />
      <Route path="/" component={Home} />
    </Switch>
    </Grid>


    
    <Grid item xs={1}>
        </Grid>

    </Grid>
  </Box>
  );
};

export default App;
