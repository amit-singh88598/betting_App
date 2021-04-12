import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Button,
  Card,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Switch,
  TextField,
} from "@material-ui/core";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}));

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
        <Box p={1}>
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

export default function Match2Odds() {
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
    <div>
      {/* <div
        style={{
          marginTop: 10,
          display: "flex",
          padding: 5,
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
            fontSize: "0.9em",
          }}
        >
          Match Odds
        </Typography>
        <div
          style={{
            marginLeft: "auto",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography
              style={{ marginRight: 70, fontWeight: 600, fontSize: "0.9em" }}
            >
              Back
            </Typography>
            <Typography
              style={{ marginRight: 30, fontWeight: 600, fontSize: "0.9em" }}
            >
              Lay
            </Typography>
          </div>
        </div>
      </div> */}
      <AppBar position="static" color="default">
        <Grid container spacing={3}>
          <Grid item xs={4} sm={4}>
            <Typography
              style={{
                fontWeight: 600,
                marginLeft: 5,
                fontSize: "0.7em",
              }}
            >
              Delhi Capitals
            </Typography>
            <Typography
              style={{
                fontWeight: 600,
                marginLeft: 5,
                fontSize: "0.7em",
              }}
            >
              0.00
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab
                style={{
                  backgroundColor: "#80d0e8",
                  color: "#000000",
                  fontSize: "0.8em",
                  fontWeight: 600,
                }}
                label="2.06"
                {...a11yProps(0)}
              />
              <Tab
                style={{
                  backgroundColor: "#fcaec7",
                  color: "#000000",
                  fontSize: "0.8em",
                  fontWeight: 600,
                }}
                label="2.08"
                {...a11yProps(1)}
              />
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <Typography
                style={{
                  fontSize: "0.8em",
                  fontWeight: 600,
                  marginBottom: 3,
                  marginTop: 3,
                }}
              >
                ODDS
              </Typography>
              <TextField
                id="outlined-number"
                size="small"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography
                style={{
                  fontSize: "0.8em",
                  fontWeight: 600,
                  marginBottom: 3,
                  marginTop: 3,
                }}
              >
                STAKE
              </Typography>
              <TextField id="outlined-basic" size="small" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +1000
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +500
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +100
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +10000
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +20000
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +50000
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <Button fullWidth variant="outlined" color="primary">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button fullWidth variant="contained" color="primary">
                Place Bet
              </Button>
            </Grid>
          </Grid>
          <div style={{ display: "flex" }}>
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: 600,
                marginBottom: 3,
                marginTop: 5,
              }}
            >
              Confirm bet before placing
            </Typography>
            <div style={{ marginLeft: "auto" }}>
              <FormControlLabel control={<Switch color="primary" />} />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <Typography
                style={{
                  fontSize: "0.8em",
                  fontWeight: 600,
                  marginBottom: 3,
                  marginTop: 3,
                }}
              >
                ODDS
              </Typography>
              <TextField
                id="outlined-number"
                size="small"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography
                style={{
                  fontSize: "0.8em",
                  fontWeight: 600,
                  marginBottom: 3,
                  marginTop: 3,
                }}
              >
                STAKE
              </Typography>
              <TextField
                id="outlined-number"
                size="small"
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +1000
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +500
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +100
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +10000
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +20000
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button fullWidth variant="contained" color="primary">
                +50000
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <Button fullWidth variant="outlined" color="primary">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button fullWidth variant="contained" color="primary">
                Place Bet
              </Button>
            </Grid>
          </Grid>
          <div style={{ display: "flex" }}>
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: 600,
                marginBottom: 3,
                marginTop: 5,
              }}
            >
              Confirm bet before placing
            </Typography>
            <div style={{ marginLeft: "auto" }}>
              <FormControlLabel control={<Switch color="primary" />} />
            </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
