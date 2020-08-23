import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Jobs from './Jobs/Jobs';
import './App.css';

const mockJobs = [
  { title: 'SWE 1', company: 'Google' },
  { title: 'SWE 2', company: 'Apple' },
  { title: 'SWE 3', company: 'Dell' },
  { title: 'SWE 4', company: 'Epam' },
];

function App() {
  return (
    <div className="App">
      <Typography variant="h1" className="title">
                Software/Design Jobs List
      </Typography>
      <Grid container className="jobs-container" spacing={2}>
        <Grid item xs={8} >
          <Jobs jobs={mockJobs} />
        </Grid>
        <Grid item xs={4} className="total-jobs" >
          <Paper>
            <Typography variant="h3" align="center">
              Total jobs: n/a
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
