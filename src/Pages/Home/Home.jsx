import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './Home.module.css'
import {Link} from 'react-router-dom'
export const Home = () => {
    return (
        <div>
    <Grid container className={styles.background}>
        <Grid item xs={12} md={6} className={styles.backgroundContext}>
  
        <h1><Link to="/product" style={{color: 'white' , textDecoration: 'none'}}> Shoe Store 2021</Link></h1>
        </Grid>
        </Grid>
        </div>
    )
}
