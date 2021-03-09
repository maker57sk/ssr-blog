import React from 'react';
import { connect } from 'react-redux';
import blogData from '../data/data';
import BlogCard from './BlogCard';
import { Box, Grid, makeStyles } from '@material-ui/core';

const Home = () => {
  return (
  
      <Grid item xs>
        {blogData.map(post => <BlogCard key={post.id} {...post} />)}
      </Grid>
    
  );
}

const mapStateToProps = ({}) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
