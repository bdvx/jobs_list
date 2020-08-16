import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job/Job';
import JobModal from './JobModal'
import './Jobs.css';

export default function Jobs({jobs}) {

    const [open, setOpen] = React.useState(false);
    const [currentJob, setCurrentJob] = React.useState(jobs[0] || {});

    const handleClose = () => {
        setOpen(false);
      };

    const handleJobClick = (j) => () =>{
        setCurrentJob(j);
        setOpen(true)
    }

    return (
        <div className="jobs">
            <JobModal isOpen={open} job={currentJob} handleClose={handleClose} />
            {jobs.map((job)=> (<Job onClick={handleJobClick(job)} job={job} />))}
        </div>
    )

}