import React from "react";
import clsx from "clsx";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
// Styled
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  paperStyle: {
    top: 64
    ,width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawer: {

  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
}));

const SideMenuBar = ({ open }) => {
  const classes = useStyles();
  return (
      <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx(classes.paperStyle, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
      >
        <List>
          {['Главная', 'В тренде', 'Подписки '].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{ (index === 0) ? <HomeIcon /> : (index === 1) ? <WhatshotIcon />: (index === 2) ? <SubscriptionsIcon />: <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Библиотека', 'История', 'Смотреть позже','Понравившиеся' ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{ (index === 0) ? <VideoLibraryIcon /> : (index === 1) ? <HistoryIcon />: (index === 2) ? <WatchLaterIcon />:(index === 3)? < ThumbUpIcon/> :<HomeIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
          ))}
        </List>
      </Drawer>
  );
};
export default SideMenuBar;
