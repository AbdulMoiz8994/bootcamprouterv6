import React from 'react'
import {Link} from 'react-router-dom'
import shoes  from '../../Data/data.json'
// import { Grid, Card, CardContent, Typography,CardActionArea,CardMedia,Button,CardActions } from '@material-ui/core';

import styles from './Product.module.css'
export const Product = () => {

    // console.log(products)
    return (
        
        <div>
           <h1 className={styles.heading}>PRODUCT</h1> 
       <ul>
        {Object.keys(shoes).map((keyName) =>{
          const shoe=shoes[keyName]
          console.log(shoe)
          return(
            <div>
              <Link key={keyName} to={`/product/${keyName}`}>
                <h1>{shoe.name}</h1>
                <img src={shoe.img} alt="images"/>
                <br/>
                <h1>{shoe.price}</h1>
              </Link>
            </div>
          )
        })}
       </ul>
 
            {/* <Grid container className={styles.container}>
        {products.map((keys) =>{ return(

                <Grid item xs={12} sm={6} md={4} key={keys._productId}>
                <Card> */}

      {/* <CardActionArea> */}
      {/* <Link key={keys._productId} to={`/product/${keys._productId,keys.name,keys.price,keys.image}`}> */}

        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={keys.image}
          title="Contemplative Reptile"
          height="500px"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {keys.name}
          </Typography>
          <Typography className={styles.price} gutterBottom variant="h5" component="h2">
            ${keys.price}
          </Typography>

          </CardContent> */}
          {/* </Link> */}

     {/* </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={styles.cartbtn}>
            Add To Cart          
        </Button>
       
      </CardActions>

    </Card>
    
                </Grid>
        )})}
            </Grid> */}
        </div>
    )
}
