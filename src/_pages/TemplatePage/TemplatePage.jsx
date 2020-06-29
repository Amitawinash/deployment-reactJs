import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TemplateDialog from "../../_components/dialogs/TemplateDialog";
import {useDispatch} from 'react-redux';
import {getTemplates, addTemplate as newTemplate} from '../../_actions';



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

function TemplatePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTemplates(dispatch)();
  }, []);


  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [busy, setbusy] = useState(false);
  const [Error, setError] = useState('');
  const [template, setTemplate] = useState({
    _id: '',
    name: '',
    versions: []
  });


  function handleName(e) {
    const {name, value} = e.target;
    setTemplate(templateData => ({...templateData, [name]: value}));
  }

  const handleVersions = (versions, value) => {
    setTemplate(templateData => ({...templateData, [value.name]: versions}));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const addTemplate = () => {
    const {name, versions = []} = template;

    if (!template.name || !template.name.length) {
      setError('Invalid Name');
      return;
    }
    if (!template.versions || !template.versions.length) {
      setError('Versions not available');
      return;
    }
    setError('')
    setbusy(true)
    newTemplate(dispatch)({name, versions: versions.map(version => version.value)})
  }

  const editTemplate = () => {
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <TemplateDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}
                                handleVersions={handleVersions} handleName={handleName}
                                addTemplate={addTemplate}
                                editTemplate={editTemplate}
                                template={template}
                />
                <Button variant="outlined" size="small" color="primary" className={classes.margin}
                        onClick={handleClickOpen}>
                  Add Template
                </Button>
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

export {TemplatePage};