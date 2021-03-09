import React from 'react';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import {
    useParams
} from "react-router-dom";
import blogData from '../data/data';

const useStyles = makeStyles({
    wrapper: {
        // border: "0.5px solid #e8e8e8",
        borderRadius: '1px',
        cursor: 'pointer',
        textAlign: 'left',
        margin: 'auto',
        // maxWidth: 1000,

    },
    content: {
        fontSize: '24px',
        // display: 'inline-block',
        color: 'black',
        // margin: '4px',
        // padding: '6px',
    },
    metatag: {
        fontSize: '14px',
        backgroundColor: 'black',
        fontWeight: '600',
        borderRadius: ' 5px',
        color: 'white',
        margin: '4px',
        padding: '2px',
    },
    paper: {
        margin: 'auto',
        maxWidth: 1000,
    },
    image: {
        margin: 'auto',
        display: 'block',
        // maxWidth: '100%',
        maxHeight: '100%',
        maxWidth: 1000,

    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        marginTop: '30'
    },
});

const BlogPage = (props) => {
    const classes = useStyles()

    let { id } = useParams();

    var post = blogData.find(obj => {
        return obj.id.toString() === id
    });


    if (typeof post == undefined) {
        return <Box />
    }

    return (

        <Box p={0} mt={0} mb={1} className={classes.wrapper}>


            <Grid container direction='column' justify="space-between" alignItems="center">
                
                    <Grid item xs={8}>
                        <h1 variant='subtitle1'>{post.title}</h1>
                        <Typography variant='caption'>{post.postedOn}</Typography>
                        {/* <Typography variant='subtitle1' className={classes.metatag}>{postData[0].tags}</Typography> */}

                    </Grid>

                    <Grid item xs={8} >
                        <img className={classes.image} src={post.image} alt='id' />
                    </Grid>


                    {/* <Grid item xs={2}>
                    {postData[0].tags.map((tag) => (
                        <Grid item className={classes.metatag} key={tag}  >
                            {tag}
                        </Grid>
                    ))}
                </Grid> */}

                    <Grid item xs={8}>
                        <Typography variant='subtitle1' className={classes.content}>{post.description}</Typography>
                    </Grid>
            
            </Grid>
        </Box>
    );
};

export default BlogPage;
