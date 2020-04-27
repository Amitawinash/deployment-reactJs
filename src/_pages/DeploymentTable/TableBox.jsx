import React, {version} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TableBox(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Url</TableCell>
            <TableCell align="right">Template Name</TableCell>
            <TableCell align="right">Versions</TableCell>
            <TableCell align="right">deployed At</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.deployments.map((deployment, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {deployment.url}
              </TableCell>
              <TableCell align="right">{deployment.templateId.name}</TableCell>
              <TableCell align="right">
                {deployment.version.map(version => (<Chip color="primary" label={version}/>))}
              </TableCell>
              <TableCell align="right">{new Date(deployment.deployedAt).toDateString()}</TableCell>
              <TableCell align="center">
                <Button onClick={() => props.deleteRow(deployment._id)}>
                  <DeleteIcon style={{color: "red"}}/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
