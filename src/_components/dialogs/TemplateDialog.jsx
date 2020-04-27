import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import CreatableSelect from 'react-select/creatable';

export default function AlertDialog(props) {

  return (
    <div>
      <Dialog
        fullWidth
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{props.template._id && props.template._id.length ? 'Edit' : 'Add'} Template</DialogTitle>
        <DialogContent>
          <Grid container>

            <Grid item xs={6}>
              <TextField name="name" label="Name Template" variant="outlined" onChange={props.handleName}/>
              <br/>
              <br/>
              <CreatableSelect
                isMulti
                name="versions"
                values={props.template.versions.map(version => ({value: version, label: version}))}
                onChange={props.handleVersions}
              />
            </Grid>
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={props[props.template._id && props.template._id.length ? 'editTemplate' : 'addTemplate']}
                  color="primary" autoFocus>
            {props.template._id && props.template._id.length ? 'Edit' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}