import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from 'react-redux';
import {getDeployments, deleteDeployment} from '../../_actions';
import TableBox from './TableBox';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function DeploymentTable() {
  const dispatch = useDispatch();
  const deployments = useSelector(state => state.deploymentReducer.deployments);
  const classes = useStyles();

  useEffect(() => {
    getDeployments(dispatch)();
  }, []);

  const deleteRow = (_id) => {
    deleteDeployment(dispatch)(_id)
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <TableBox deployments={deployments || []} deleteRow={deleteRow}/>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}

export {DeploymentTable};