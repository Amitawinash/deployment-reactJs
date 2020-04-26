import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LeftDrawer from './LeftDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

export default function Header() {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => setState({...state, [anchor]: open});
  return (
    <div className={classes.root}>
      <LeftDrawer toggleDrawer={toggleDrawer} showDrawer={state.left}></LeftDrawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                      onClick={() => toggleDrawer('left', true)}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}