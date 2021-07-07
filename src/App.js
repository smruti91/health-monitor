import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import './App.css'
import HealthForm from './components/HealthForm'
import TodoList from './components/TodoList'
import HealthData from './components/HealthData'
import firebase from "firebase";
import db from './firebase'
import Header from './components/Header'



const App = () => {
  const [healthData, setHealthData] = useState([]);
  useEffect(() => {

    db.collection('health-monitor').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setHealthData(snapshot.docs.map(doc => ({ id:doc.id , data:doc.data()})))
      })
},[]);
 //console.log(healthData)
  return (
    <>
     
    <div className= ''>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component = {HealthForm} />
          <Route path="/data"  
          render = {(props) => (
            <HealthData {...props} healthData = {healthData} />
         )}
          
          />
        </Switch>
      </Router>
      
    </div>
    <div>
      {
        // healthData.map(hm => (
        //   <HealthData healthData = {hm.data} />
        // ))
        // <HealthData healthData = {healthData} />
      }
     
    </div>
    </>
  )
}

export default App

