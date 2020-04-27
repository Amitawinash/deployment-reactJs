import React, {useEffect, version} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {getTemplates, addDeployment} from "../../_actions";
import {useDispatch, useSelector} from 'react-redux';

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

function DeploymentsPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [url, setUrl] = React.useState('');
  const [versions, setVersions] = React.useState([]);
  const [templateId, setTemplateId] = React.useState('');
  const [error, setError] = React.useState('');

  const templates = useSelector(state => state.templateReducer.templates);

  const handleUrl = (e) => setUrl(e.target.value);

  useEffect(() => getTemplates(dispatch)(), []);

  const onTemplateSelect = (e, value, reason) => {
    if (reason === 'select-option' || reason === 'clear') {
      const {versions = [], _id} = value || {};
      setTemplateId(_id);
      setVersions(versions.map(version => ({value: version, label: version})));
    }
  }


  const onAddDeployment = () => {
    if (!url && !url.length) {
      setError('URL is required');
      return
    }
    if (!templateId && !templateId.length) {
      setError('Template is required');
      return
    }
    setError('');
    addDeployment(dispatch)({url, templateId, version: versions.map(version => version.value)})
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField label="Url" value={url} onChange={handleUrl} fullWidth variant="outlined"/>
              </Grid>
              <Grid item xs={12}>
                <div style={{position: "relative"}}>
                  <Autocomplete
                    id="combo-box-demo"
                    onChange={onTemplateSelect}
                    onInputChange={onTemplateSelect}

                    options={templates || []}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => <TextField {...params} fullWidth label="Select Template"
                                                        variant="outlined"/>}
                  />
                </div>
              </Grid>

              <Grid item xs={12}>
                <div>Versions</div>
                <Select
                  className="basic-single"
                  classNamePrefix="versions"
                  value={versions || []}
                  isMulti
                  isDisabled={true}
                />
              </Grid>

              <Grid item xs={12}>
                <Button color="primary" onClick={onAddDeployment}> Add Deployment</Button>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
    </div>
  );
}

export {DeploymentsPage};