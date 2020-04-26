import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeploymentIcon from '@material-ui/icons/List';
import TemplateIcon from '@material-ui/icons/Work';
import {Link} from "react-router-dom";

export default function LeftDrawer(props) {

  return (
    <div>
      <Drawer anchor={'left'} open={props.showDrawer} onClose={() => props.toggleDrawer('left', false)}>
        <List>
          {['deployments', 'template'].map((text, index) => (
            <ListItem button key={text} component={Link} to={"/" + text}
                      onClick={() => props.toggleDrawer('left', false)}>
              <ListItemIcon>
                {text === 'deployments' && <DeploymentIcon/>}
                {text === 'template' && <TemplateIcon/>}
              </ListItemIcon>
              <Link to={"/" + text}>
                <ListItemText primary={text.toUpperCase()}/>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
