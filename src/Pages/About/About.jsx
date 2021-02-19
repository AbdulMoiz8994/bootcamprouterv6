import React from 'react'
import {Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import styles from  './About.module.css'

export const About = () => {
    return (
        <div className={styles.container}>
        <Typography variant="h1" component="h2" gutterBottom>
            #BOOTCAMP 2020
        </Typography>
        <Typography variant="h1" component="h2">
            PANACLOUD  <FavoriteIcon  className={styles.heart}/> 

        </Typography>
        </div>
    )
}
