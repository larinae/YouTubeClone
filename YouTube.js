import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import LayoutComponent from "./layout";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexGrow: 1,
        marginTop: 85,
    },
    le: {
        width: 900, /* Ширина слоя */
        marginLeft: 50, /* Внутренние поля вокруг содержимого */
    },
   card: {
        width: 400,
        marginLeft: 50

    },
    text: {
        float: "left",
        marginRight: 10,
        marginBottom: 20,
        width: 250,
        height: 150

    },

});

function Youtube(props) {
    const classes = useStyles();

    const videoSrc = "https://www.youtube.com/embed/" + props.video +
        "?autoplay=" + props.autoplay +
        "&modestbranding=" + props.modest +
        "&fs=1";

    const stylePlayer = {width: props.width, height: props.height};

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <LayoutComponent>
            <div className={classes.root}>
                <div className={classes.le}>
                    <iframe
                        style={stylePlayer}
                        width={props.width}
                        height={props.height}
                        src={videoSrc}
                        title={props.video}
                       />
                    <Accordion>
                        <AccordionSummary>
                            <div style={{display: "block"}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.text}
                                </Typography>
                            </div>
                            <div style={{paddingLeft: 260}}>
                                <Button style={{
                                    background: '#FF0000',
                                    color: "white"
                                }} variant="outlined" onClick={handleClickOpen}>
                                    Поделиться
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <DialogTitle style={{background: '#000000', color: "white"}}
                                                 id="alert-dialog-title">{"Скопируйте эту ссылку, если хотите поделиться"}</DialogTitle>
                                    <DialogContent style={{background: '#000000', color: "white"}}>
                                        <DialogContentText id="alert-dialog-description" style={{color: "white"}}>
                                            {videoSrc}
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions style={{background: '#000000'}}>
                                        <Button style={{
                                            background: '#FF0000',
                                            color: "white", height: 50,
                                        }} onClick={handleClose} >
                                            <h3>Закрыть</h3>
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Оставьте комментарий"/>
                    </form>
                </div>
                <div className={classes.card}>
                    <Link to="/video/H76pEfqywAc" style={{textDecoration: 'none', color: 'black'}}>
                        <Card >
                            <img
                                src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkTWXaglOdFgq0tdRv_WUmYKaKTM5SRkZCeTgDn6uOyic"
                                className={classes.text}/>
                            Круиз на самых больших лайнерах в мире. Большой выпуск.
                        </Card>
                    </Link>
                    <Link to="/video/HF1dGDQO6Kc" style={{textDecoration: 'none', color: 'black'}}>
                        <Card >
                        <img
                            src="http://fotovideoforum.ru/resources/image/100189"
                            className={classes.text}/>
                        Фарерские острова - рай интроверта. Большой выпуск.
                    </Card>

                    </Link>
                    <Link to="/video/xuqJL70LEOY" style={{textDecoration: 'none', color: 'black'}}>
                        <Card>
                            <img
                                src="https://avatars.mds.yandex.net/get-zen_doc/1586459/pub_5dfb0824ba281e00b2a034a4_5e0069dd6f5f6f00ae1413d6/scale_1200"
                                className={classes.text}/>
                            Как поймать северное сияние. Ледяной отель. Большой выпуск.
                        </Card>
                    </Link>
                </div>
            </div>
        </LayoutComponent>
    )
}

export default Youtube;