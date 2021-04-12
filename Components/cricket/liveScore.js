import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Card, Grid } from "@material-ui/core";
import { Style } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },

  //   Live Score Style

  liveScoreCardStyle: {
    padding: 5,
    backgroundColor: theme.palette.primary.background,
    color: theme.palette.secondary.main,
  },
  lveImgCard: {
    [theme.breakpoints.down("sm")]: {
      height: "30vh",
      backgroundImage: 'url("/live.jpg")',
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
    },
  },
  liveScoreCard: {
    width: 120,
    height: 80,
    backgroundColor: theme.palette.primary.grey,
    marginTop: 40,
  },

  // Justify Content Center

  justifyCenter: {
    fontSize: "0.7em",
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    color: theme.palette.secondary.main,
    marginTop: 5,
  },

  //   scoreCard Style

  scoreCard: {
    backgroundColor: theme.palette.secondary.background,
    color: theme.palette.secondary.main,
    padding: 5,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function LiveScore() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Live Score" {...a11yProps(0)} />
          <Tab label="Scorecard" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/*///////////////////////////////////////////////////////               Live Score Card */}

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Card className={classes.liveScoreCardStyle}>
            <Typography style={{ fontSize: "0.8em", fontWeight: 600 }}>
              Match has not started
            </Typography>
            <Typography style={{ fontSize: "0.7em", fontWeight: 600 }}>
              Starts at 12:30 IST
            </Typography>

            <div className={classes.lveImgCard}>
              <Card className={classes.liveScoreCard}>
                <Typography className={classes.justifyCenter}>
                  Countdown
                </Typography>
              </Card>
            </div>
          </Card>
        </TabPanel>

        {/*///////////////////////////////////////////////////////               Scorecard Card */}

        <TabPanel value={value} index={1} dir={theme.direction}>
          <Card className={classes.scoreCard}>
            <Typography
              style={{ fontSize: "0.8em", fontWeight: 600, marginBottom: 10 }}
            >
              Scorecard
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <Typography
                  style={{ fontSize: "0.6em", fontWeight: 500, float: "right" }}
                >
                  Rajasthan Royals INNS
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography style={{ fontSize: "0.6em", fontWeight: 500 }}>
                  Rajasthan Royals INNS
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
