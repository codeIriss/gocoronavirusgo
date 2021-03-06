import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.css';

export const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) =>  {
    // console.log(props);
    if(!confirmed){
        return('Loading...')
    }
   
    return (
       
        <div className="container">
           <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className="card infected" >
                <CardContent >
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={1.5} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}  xs={12} md={3} className="card recovered">
                <CardContent >
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={1.5} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Recovery</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}  xs={12} md={3} className="card deaths">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={1.5} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths</Typography>
                </CardContent>
            </Grid>

           </Grid>
        </div>
    )
}

export default Cards;