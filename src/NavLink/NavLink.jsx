import React from 'react'
import {NavLink} from 'react-router-dom'
import {AppBar,Toolbar,Typography,Grid} from '@material-ui/core';
import styles from './NavLink.module.css'

import ClassNames from 'classnames'

export const NavLinks = () => {
    return (
        <div>
          <Grid item  md={12}>
            <AppBar position="static">
        <Toolbar className={styles.container}>
        <Typography variant="h6" className={ClassNames(styles.links)}>
        <NavLink to="/" style={{color: 'white' , textDecoration: 'none'}}>Home</NavLink>
        </Typography>
          <Typography variant="h6"  className={ClassNames(styles.links)}>
          <NavLink to="/about" style={{color: 'white' , textDecoration: 'none'}}>About</NavLink>            
          </Typography>
          <Typography variant='h6'  className={ClassNames(styles.links)}>
          <NavLink to="/product" style={{color: 'white' , textDecoration: 'none'}}>Product</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      </Grid>
        </div>
    )
}
