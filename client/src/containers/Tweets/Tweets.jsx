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

import BASE_URL from '../../utils/Axios'

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
    const [state,setState] = React.useState('')
    const classes = useStyles();
    // const dispatch = useDispatch();
    const fetchData = async () => {
      let id = props.match.params.tweet
        await BASE_URL.get(`/tweet/${id}`).then(res=>{
            console.log(res,"response")
            setState(res.data.data.data)
        }).catch(err=>console.log(err))
  };
  React.useEffect(() => {
    fetchData()
  }, []);
  console.log(state,'state')
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
                    {state.created_at === undefined ? 'no date' :state.created_at }
                </div>
                {/* <div style={{color:'#fff'}}>
                    <span style={{color:'yellow'}}>user name : </span>
                    {state.user.name === undefined? 'no name' :state.user.name }
                </div> */}
                <div style={{color:'#fff'}}>
                    <span style={{color:'yellow'}}>text : </span>
                    {state.text === undefined? 'no text': state.text }
                </div>
                {/* <div style={{color:'#fff'}}>
                    <span style={{color:'yellow'}}>user description : </span>
                    {state.user.description === undefined ? 'no description' :state.user.description }
                </div> */}
                {/* <div style={{color:'#fff'}}>
                    <span style={{color:'yellow'}}>retweeted text : </span>
                    {state.retweeted_status.text===undefined ? 'no retweet':state.retweeted_status.text }
                </div>
                 */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Tweets;
