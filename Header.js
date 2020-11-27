import React  from "react";

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
} from "@material-ui/core";
import {Link} from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { fade, makeStyles } from "@material-ui/core/styles";

const HeaderMUIStyled = makeStyles((theme) => ({
    appBar: {
        color: "black",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 0.4,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    inputInput: {
        color: 'black',
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
    },
    rightSideIcon: {
        display: "flex",
        alignItems: "center",
        flexGrow: "0.6",
        justifyContent: "flex-end",
        "& > *": {
            margin: theme.spacing(0, 1.3),
            cursor: "pointer",
        },
    },
}));

const Header = ({ leftIcon }) => {
    const classes = HeaderMUIStyled();
    return (
        <AppBar  className={classes.appBar}>
            <Toolbar style ={{ background:'red' }}>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => leftIcon()}
                >
                    <MenuIcon />
                </IconButton>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: 800 }}>
                <Typography className={classes.title} variant="h6" noWrap>
                    YouTube
                </Typography>
                </Link>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search..."
                        classes={{
                            input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                    />
                </div>
                <div className={classes.rightSideIcon}>
                    <VideoCallIcon />
                    <AppsIcon />
                    <NotificationsIcon />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
