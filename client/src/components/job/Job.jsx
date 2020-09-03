import React from 'react';
import './job.scss';

import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Popover from '@material-ui/core/Popover';

const ONE_DAY_MS = 24*3600*1000;

function getMDY(ts) {
    return ts.toDateString().split(' ').slice(0,3).join(' ')
}

function makeDate(timestamp) {
    const date = new Date(timestamp);
    const dateStr =  getMDY(date);
    const todayStr = getMDY(new Date());
    const yesterdayStr = getMDY(new Date(Date.now() - ONE_DAY_MS));
    if (dateStr === todayStr) {
        return 'Today';
    } else if (dateStr === yesterdayStr) {
        return 'Yesterday';
    } else {
        return dateStr;
    }
}

const Job = ({job}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
   
    return(
        <div className='job'>
            <Card className='card' elevation={3}>
            <CardContent className='card-content'>
                <div>
                <Typography variant='h5'>{job.title}</Typography>
                <Divider/>
                

        <Typography variant='subtitle2' className='job-title'>{job.company}</Typography>
                
                <Typography className='location' color="textSecondary">{job.location}</Typography>
                <Button className='description-btn' size='small' onClick={handleClick}>Read job details</Button>
                <Popover
                elevation={20}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
          <div style={{height: 500, width: 800}}>
          <Typography variant='body2' dangerouslySetInnerHTML={{
    __html: job.description
  }}></Typography>
          </div>
        
      </Popover>
                </div>
                <div className='date-logo'>
                    <Typography style={{marginLeft: 'auto'}} variant='caption'>{makeDate(job.created_at)}</Typography>
                    <div style={{width: 200, height: 100}}>
                    <img src={job.company_logo} alt="company-logo" style={{ float:'right', maxHeight: '100%', maxWidth: '100%'}}></img>
                    </div>
                </div>

            </CardContent>
            <CardActions>
                <Button className='apply-btn' variant='contained' size='small' color='primary' href={job.url}>Apply Now</Button>            
            </CardActions>
            </Card>
        </div>
    )
}

export default Job;