import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import db from '../firebase';
import { useEffect , useState } from 'react';

import '../App.css'



  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  


const HealthData = (props) => {

    const classes = useStyles();
    // const time = props.healthData[1].data.timestamp;
    // const date = time.toDate();
    // const shortDate = date.toDateString();
    
  //console.log(shortDate)
    
   const [hmdata , setHmdata] = useState([]);
   const [selectedDate, setSelectedDate] = React.useState(new Date());
   const [searchdata,setSearchdata] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

   useEffect(()=>{
    setHmdata(props.healthData)
   },[]);

   

//    useEffect(() => {

//     db.collection('health-monitor').where('timestamp','=',selectedDate).onSnapshot(snapshot => {
//       setSearchdata(snapshot.docs.map(doc => ({ id:doc.id , data:doc.data()})))
//       })
// },[]);
    //console.log(hmdata);

    const searchDate = () => {
      db.collection('health-monitor').where('timestamp',">",selectedDate).onSnapshot(snapshot => {
        setSearchdata(snapshot.docs.map(doc => ({ id:doc.id , data:doc.data()})))
        })
      console.log(searchdata);
      console.log(new Date())
      console.log(selectedDate)
    }

    return (
      <>
        <div className="searchDate">
        <form className={classes.container} noValidate>
      {/* <TextField
        id="date"
        label="Search Date"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      /> */}
<MuiPickersUtilsProvider utils={DateFnsUtils}>
<KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

</MuiPickersUtilsProvider>
      <Button 
    
    variant="contained" 
    color="primary"
    onClick = {searchDate}
    >
       Add 
   </Button>
    </form>
        </div>
        <div>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">Saturation</TableCell>
            <TableCell align="right">Pulse</TableCell>
            <TableCell align="right">Temp</TableCell>
            <TableCell align="right">Medcine</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hmdata.map((row) =>  (
              
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.data.time}
              </TableCell>
              <TableCell align="right">{row.data.saturation}</TableCell>
              <TableCell align="right">{row.data.pulse}</TableCell>
              <TableCell align="right">{row.data.temp}</TableCell>
              <TableCell align="right">{row.data.med}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </>
    )
}

export default HealthData
