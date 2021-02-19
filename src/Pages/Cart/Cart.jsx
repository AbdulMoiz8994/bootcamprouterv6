import React from 'react'
import {products} from '../../Data/data.json'
import {useParams} from 'react-router-dom'
import { makeStyles,Card,CardHeader,CardMedia,CardContent } from '@material-ui/core';
import {CardActions,Avatar,IconButton,Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      width: '700px',
      padding: '16px',
    margin:'50px',
    alignItems: 'center',
    textAlign: 'center',
    border: '10px solid gary'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: '#383CC1',
    },
    heart:{
       color: 'red',
       width: '300px',
    },
  }));


export const Cart = () => {

    const {id} = useParams()
    console.log("ID FROM CART: ", id);
    const shoe=products[id]
    console.log(shoe)

    const classes = useStyles();


if(!shoe){
    return <h2>Product Not Found</h2>
}

    return (
<Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            N
          </Avatar>
        }
       
        title={shoe.name}
        subheader= {new Date().toDateString()}
      />
      <CardMedia
        className={classes.media}
        image={shoe.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is Bootcamp 2020 of Sir Zia Khan.I did Project three.
          One new thing I learnt of this is that we can extract whole obejct from index nub,as we did above in (useParams).
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className={classes.heart} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
        

            )
}

















{/* <div>
            <h1>we are on cart</h1>
            <h2>{shoe.name}</h2>
            <img src={shoe.image} alt="images"  height="500px" style={{}}/>
            <h2>${shoe.price}</h2>
        </div> */}
