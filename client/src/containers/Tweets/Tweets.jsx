import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as TweetActions from "./TwitActions";
import {
  makeStyles,
  Typography,
  Avatar,
  Box,
  Container,
  Grid,
} from "@material-ui/core";

import CardComponent from "../../components/card/CardComponent";
import Header from "../../components/header/TweetHeader";

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
}));

const Tweets = (props) => {
    console.log(props,'props')
  const classes = useStyles();
  const Data = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const fetchData = async () => {
    if (props.match.params.tweet) {
      dispatch(TweetActions.detailTweet(props.match.params.tweet));
    }
  };
  React.useEffect(() => {
    fetchData();
  }, [dispatch]);
  console.log(Data,'adad')
  return (
    <div>
      <Header />
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Detail Tweet
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <div style={{
                display:'flex',
                justifyContent:'flex-start',
                alignItems:'flex-start',
                alignContent:'center',
                width:'100%',
                padding:'10px',
                height:'400px',
                background:'gray',
                borderRadius:'10px',
                border:'1px solid #000',
                flexDirection:'column'
            }}>
                <div style={{color:'#fff'}}>
                    <span style={{color:'yellow'}}>created at : </span>
                    {Data.resultData.created_at}
                </div>
                <div style={{color:'#fff'}}>
                    <span style={{color:'yellow'}}>user name : </span>
                    {Data.resultData.user.name}
                </div>
                <div style={{color:'#fff'}}>
                    <span style={{color:'yellow'}}>text : </span>
                    {Data.resultData.text}
                </div>
                <div style={{color:'#fff'}}>
                    <span style={{color:'yellow'}}>user description : </span>
                    {Data.resultData.user.description}
                </div>
                <div style={{color:'#fff'}}>
                    <span style={{color:'yellow'}}>retweeted text : </span>
                    {Data.resultData.retweeted_status.text}
                </div>
                
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Tweets;
