import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import * as SearchActions from "./HomepageActions";
import {
  makeStyles,
  Typography,
  Avatar,
  Box,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Header } from "../../components/index";
import CardComponent from "../../components/card/CardComponent";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  mainContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  search: {
    float: "right",
    height: "250vh",
    width: "30%",
    display: "flex",
    background: "#f0ebdf",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      display: "none",
    },
  },
  hero: {
    // width:'100%',
    float: "left",
    marginTop: "60px",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https:images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "620px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
      width: "100%",
    },
  },
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
  Content: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
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
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Homepage = ({ location, history }) => {
  const classes = useStyles();
  const userAuthData = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(SearchActions.searchInput());
  };
  useEffect(() => {
    fetchData();
  }, [dispatch, history]);

  console.log(userAuthData.resultData);

  return (
    <div>
      <Header />
      <Box className={classes.mainContent}>
        <Box className={classes.Content}>
          <Box className={classes.hero}>
            <Box>Tweety Blog</Box>
          </Box>
          <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography variant="h4" className={classes.blogTitle}>
              Articles
            </Typography>
            <Grid container spacing={3} >
              {userAuthData.resultData.map((elm,key)=><Grid item xs={12} sm={6} md={4}>
                <Link to={`tweet/${elm.user.id}`} style={{textDecoration:'none'}}>
                <CardComponent metaData={elm} />  
                </Link>
              </Grid>)
              }
            </Grid>
            <Box my={4} className={classes.paginationContainer}>
              {/* <Pagination count={10} /> */}
            </Box>
          </Container>
        </Box>
        <Box className={classes.search}>
          <div
            style={{
              marginTop: "50px",
              textAlign: "center",
              width: "100%",
            }}
          >
            Search results
          </div>
          <div></div>
        </Box>
      </Box>
    </div>
  );
};

export default Homepage;
