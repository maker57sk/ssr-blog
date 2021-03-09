import React,{useContext} from 'react';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    wrapper: {
        "&&&:before": {
            borderBottom: "none"
          },
          "&&:after": {
            borderBottom: "none"
          },
        // border: "0.5px solid #e8e8e8",
        borderRadius: '1px',
        cursor: 'pointer',
        textAlign: 'left',
        margin: 'auto',
        // maxWidth: 1000,

    },
    content: {
        fontSize: '14px',
        display: 'inline-block',
        color: 'grey',
        margin: '4px',
        padding: '6px',
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
        maxWidth: '100%',
        maxHeight: '100%',

    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        marginTop: '30'
    },
});

const BlogCard = (props) => {
    const classes = useStyles();

    let blogUrl = "/blog/" + props.id;

    return (

      <Link style={{ textDecoration: 'none' }} to={blogUrl}>
        <Box p={4} mt={1} mb={1} className={classes}>
            <Grid container alignItems='center'>
                <Grid item xs={5}>
                    <h1 variant='subtitle1'>{props.title}</h1>

                    <Typography variant='caption'>{props.postedOn}</Typography>

                </Grid>
                <Grid item container xs={5}>
                    <Typography variant='subtitle1' className={classes.content}>{props.description.substring(0, 200)}</Typography>
                    {props.tags.map((tag) => (
                        <Grid className={classes.metatag} key={tag} item>
                            {tag}
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={2} >
                    <img className={classes.image} src={props.image} alt={props.id} />
                </Grid>

            </Grid>

            <Divider variant="inset" />
        </Box>
      </Link>
    );
};

export default BlogCard;
