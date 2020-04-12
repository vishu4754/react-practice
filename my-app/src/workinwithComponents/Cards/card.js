import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'flex-start',
  },
  paper: {
    maxWidth: '275px',

  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.paper} pr='5'>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Name Of The Wind"
            object-fit="cover"
            image="images/NameOFTheWind.jpg"
            title="Name Of The Wind"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name Of The Wind
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.
    
    The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
    
    A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Preview
        </Button>
          <Button  component={Link} to='/login' size="small" color="primary">
            Buy
        </Button>
        </CardActions>
      </div>
      <Box marginBottom="20px" marginTop="20px" width="20px" />
      <div className={classes.paper}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Name Of The Wind"
            object-fit="cover"
            image="images/NameOFTheWind.jpg"
            title="Name Of The Wind"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name Of The Wind
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.
    
    The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
    
    A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Preview
        </Button>
          <Button component={Link} to='/login' size="small" color="primary">
            Buy
        </Button>
        </CardActions>
      </div>
      <Box marginBottom="20px" marginTop="20px" width="20px" />
      <div className={classes.paper}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Name Of The Wind"
            object-fit="cover"
            image="images/NameOFTheWind.jpg"
            title="Name Of The Wind"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name Of The Wind
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.
    
    The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
    
    A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Preview
        </Button>
          <Button component={Link} to='/login' size="small" color="primary">
            Buy
        </Button>
        </CardActions>
      </div>
      <Box marginBottom="20px" marginTop="20px" width="20px" />
      <div className={classes.paper}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Name Of The Wind"
            object-fit="cover"
            image="images/NameOFTheWind.jpg"
            title="Name Of The Wind"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name Of The Wind
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.
    
    The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
    
    A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Preview
        </Button>
          <Button component={Link} to='/login' size="small" color="primary">
            Buy
        </Button>
        </CardActions>
      </div>
      <Box marginBottom="20px" marginTop="20px" width="20px" />
      <div className={classes.paper}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Name Of The Wind"
            object-fit="cover"
            image="images/NameOFTheWind.jpg"
            title="Name Of The Wind"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name Of The Wind
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.
    
    The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
    
    A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Preview
        </Button>
          <Button component={Link} to='/login' size="small" color="primary">
            Buy
        </Button>
        </CardActions>
      </div>
      <Box marginBottom="20px" marginTop="20px" width="20px" />
      <div className={classes.paper}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Name Of The Wind"
            object-fit="cover"
            image="images/NameOFTheWind.jpg"
            title="Name Of The Wind"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name Of The Wind
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.
    
    The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
    
    A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Preview
        </Button>
          <Button component={Link} to='/login' size="small" color="primary">
            Buy
        </Button>
        </CardActions>
      </div>
      <Box marginBottom="20px" marginTop="20px" width="20px" />
      <div className={classes.paper}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Name Of The Wind"
            object-fit="cover"
            image="images/NameOFTheWind.jpg"
            title="Name Of The Wind"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name Of The Wind
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.
    
    The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
    
    A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Preview
        </Button>
          <Button component={Link} to='/login' size="small" color="primary">
            Buy
        </Button>
        </CardActions>
      </div>


    </Card>
  );
}