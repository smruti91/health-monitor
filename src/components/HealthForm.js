import React, { useState } from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, FormControl,Input,InputLabel,TextField } from '@material-ui/core';
import db from '../firebase';
import firebase from "firebase";


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    //   textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);



const HealthForm = () => {

    const classes = useStyles();

    const [time,setTime] = useState('');
    const [saturation,setSaturation] = useState('');
    const [pulse,setPulse] = useState('');
    const [temp,setTemp] = useState('');
    const [med,setMed] = useState('');

    const addHealtData = () => {

      // db.collection('todos').add({
      //   todo: input,
      //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
      // })

      db.collection('health-monitor').add({
        time:time,
        saturation: saturation,
        pulse:pulse,
        temp:temp,
        med: med,
        date:new Date(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      setTime('');
      setSaturation('');
      setPulse('');
      setTemp('');
      setMed('');
    }
    
    return (
        <div className=" todo-app  {classes.root }">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Health Monitoring App</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
         <TextField
          required
          name="Time"
          label="Time"
          fullwidth = "true"
          value ={time}
          onChange = { e => setTime(e.target.value) }
         
         />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <TextField
          required
          name="Saturation"
          label="Saturation"
          fullWidth
          value = {saturation}
          onChange= { e => setSaturation(e.target.value) }
         
         />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <TextField
          required
          name="Pulse"
          label="Pulse"
          fullWidth
          value = {pulse}
          onChange = {e => setPulse(e.target.value)}
         
         />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <TextField
          required
          name="Temp"
          label="Temp"
          fullWidth
          value = {temp}
          onChange = { e => setTemp(e.target.value) }
         
         />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <TextField
          
          name="Medecine"
          label="Medecine"
          fullWidth
          value = {med}
          onChange = {e => setMed(e.target.value)}
         
         />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Button 
    
            variant="contained" 
            color="primary"
            onClick = {addHealtData}
            >
               Add 
           </Button>
          </Paper>
        </Grid>
       
      </Grid>
    </div>
    )
}

export default HealthForm
