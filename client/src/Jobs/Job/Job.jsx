import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ONE_DAY_MS from '../../constants';


export default function Jobs({job, onClick}) {

    const createDate = () => {};

    return (
        <Paper onClick={onClick} className='job'>
            <div className="flex-align-mid">
                <div className="job-title-location">
                    <Typography variant='h6'>{job.title}</Typography>
                    <Typography variant='h5'>{job.company}</Typography>
                    <Typography>{job.location}</Typography>
                </div>
            </div>
            <div className="flex-align-mid">
                <Typography>{createDate(job.created_at)}</Typography>
            </div>
        </Paper>
    )

}