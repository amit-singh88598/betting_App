import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import RecentMatch from "../Components/Desktop/Cricket/recentMatch";
import InPlay from "../Components/inPlay";
import MostPopular from "../Components/mostPopular";
import DesktopHeader from "../Layouts/desktopHeader";
import DesktopSideBar from "../Layouts/desktopSideBar";
import MobHeader from "../Layouts/mobHeader";
import styles from "../styles/Home.module.css";

const useStyle = makeStyles((theme) => ({
  mobView: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktopView: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Home() {
  const classes = useStyle();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.mobView}>
        <MobHeader>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InPlay />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MostPopular />
              </Grid>
            </Grid>
          </div>
        </MobHeader>
      </div>
      <div className={classes.desktopView}>
        <DesktopHeader />
        <Container>
          <Grid container>
            <Grid item xs={12} sm={2}>
              <DesktopSideBar />
            </Grid>
            <Grid item xs={12} sm={7}>
              <RecentMatch />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
