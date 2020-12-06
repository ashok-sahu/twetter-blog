import React from 'react'
import {Box,Avatar,Card,CardActions,CardActionArea,Typography,CardMedia,CardContent,makeStyles} from '@material-ui/core'
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
    blogsContainer: {
      paddingTop: theme.spacing(3),
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3),
    },
    card: {
      maxWidth: "100%",
    },
    media: {
      height: 240,
    },
    cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between",
    },
    author: {
      display: "flex",
    }
  }));

const CardComponent = (props) => {
    console.log(props.metaData,'metadata')
  const classes = useStyles();
    return <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={`${props.metaData.user.profile_background_image_url || props.metaData.user.profile_banner_url}`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.metaData.user.description}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {props.metaData.text}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className={classes.cardActions}>
      <Box className={classes.author}>
        <Avatar src={`${props.metaData.user.profile_image_url_https}`}/>
        <Box ml={2}>
          <Typography variant="subtitle2" component="p">
            {props.metaData.user.name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
          >
            {props.metaData.user.created_at}
          </Typography>
        </Box>
      </Box>
      <Box>
        <BookmarkBorderIcon />
      </Box>
    </CardActions>
  </Card>
}

export default CardComponent
