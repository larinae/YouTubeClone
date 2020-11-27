import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        marginTop: 95,
        marginLeft: 30,
        marginRight: 30,
    },
    paper: {
        marginBottom: 27,
    },
});

function MediaCard(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Link to="/video/BNdJaetPrlg" style={{color: 'black'}}>
                        <Paper className={classes.paper}> <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                marginLeft="100px"
                                width="280"
                                height="180"
                                image="https://clickchain.ru/wp-content/uploads/2019/10/SHvetsiya.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Швеция. Большой Выпуск.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                    ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link to="/video/Gb0TQ7VeApY" style={{color: 'black'}}>
                        <Paper className={classes.paper}><CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                width="280"
                                height="180"
                                image="https://eer.ru/sites/default/files/field/image/japan.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Япония. Большой выпуск.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                    ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea></Paper>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link to="/video/p0ggtmXghPg" style={{color: 'black'}}>
                        <Paper className={classes.paper}><CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                width="280"
                                height="180"
                                image="https://avatars.mds.yandex.net/get-zen_doc/1898210/pub_5cb1adcc93828900b32eb61f_5cb1ae4d421c3400b3af40e4/scale_1200"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Дубай.  Большой выпуск.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                    ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea></Paper>
                    </Link>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Link to="/video/ea5uxRmRe8Y" style={{color: 'black'}}>
                        <Paper className={classes.paper}><CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                width="280"
                                height="175"
                                image="https://www.tourprom.ru/site_media/images/upload/2019/9/5/newsphoto/araviya.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Саудовская Аравия.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                    ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea></Paper>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link to="/video/tVTT95C8J4o" style={{color: 'black'}}>
                        <Paper className={classes.paper}> <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                width="280"
                                height="175"
                                image="https://avatars.mds.yandex.net/get-zen_doc/1588093/pub_5ce99819752e5b00b25b9916_5d9f585792414d00b02cf7b7/scale_1200"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Австралия. Большой выпуск."
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                    ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea></Paper></Link>
                </Grid>
                <Grid item xs>
                    <Link to="/video/wb84vvYSPEU" style={{color: 'black'}}>
                        <Paper className={classes.paper}> <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                width="280"
                                height="175"
                                image="https://avatars.mds.yandex.net/get-zen_doc/96780/pub_5c25e2beec099600a94560fa_5c25e31bd5102000a9e10054/scale_1200"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Исландия. Большой выпуск.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                    ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea></Paper></Link>
                </Grid>
            </Grid>
        </div>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MediaCard);