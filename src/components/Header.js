import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Button,  makeStyles } from '@material-ui/core';
// import BlogPage from './BlogPage';



const useStyles = makeStyles({
    box1st: {
        bgcolor:'#0c154c',
        color: 'white',
    },
    box2st: {
        display:'flex',
        justifyContent:'space-between',
    },
  
  })

const Header = (props) => {

    const classes = useStyles();

    return (
        <Box
            py={5}
            // className={classes.box1st}
            bgcolor='#0c154c'
            color='white'
        >
            <Grid
                container
                justify='center'
            >
                <Grid
                    item
                    xs={10}
                >
                    <Box
                    className={classes.box2st}
                        // display='flex'
                        // justifyContent='space-between'
                    >
                        
                        <Link style={{ textDecoration: 'none' }} to="/">
                        <Typography  variant='h4'>MAGNiTT</Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;