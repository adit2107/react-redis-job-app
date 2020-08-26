import React from 'react';
import { Typography } from '@material-ui/core';
import Job from '../job/Job';
import './jobs.scss';

import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Jobs = ({jobs}) => {

    const numOfJobs = jobs.length;
    const numPages = Math.ceil(numOfJobs / 20);

    const [activeStep, setActiveStep] = React.useState(0);
    const jobsOnPage = jobs.slice(activeStep * 20, (activeStep * 20) + 20);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
    return (
<div>
    <Typography variant="h4" component="h1">
        Remote Programming Jobs
    </Typography>
    <Typography variant="subtitle1" component="h6">
        Found {numOfJobs} jobs!
    </Typography>
    <div className='jobs'>
    {
            jobsOnPage.map((job, i) => <Job key={i} job={job}/>)
    }
    <div>
        Page {activeStep+1} of {numPages}
    </div>
     <MobileStepper
      variant="progress"
      steps={numPages}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === numPages-1}>
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
    </div>
    
</div>
    );
}

export default Jobs;