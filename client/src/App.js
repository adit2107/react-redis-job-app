import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Jobs from './components/jobs/Jobs';

const JOB_URL = 'http://localhost:3081/jobs';

async function getJobs(updateCallback) {
  const response = await axios.get(JOB_URL);
  console.log(response.data);
  updateCallback(response.data);
}

function App() {

  const [jobList, updateJobs] = useState([]);

  useEffect(() => {
      getJobs(updateJobs);
  }, []);

  return (
   <div>
     <Jobs jobs={jobList}/>
   </div>
  );
}

export default App;
