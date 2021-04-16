import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  headingStyle: {
    marginTop: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },

  ///

  cardStyle: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: 5,
    marginTop: 15,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BetSlip() {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state, setState] = React.useState({
    checkedA: false,
  });
  const handleChangeValue = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            style={{ width: 2, fontSize: "0.8em", fontWeight: 600 }}
            label="Betslip"
            {...a11yProps(0)}
          />
          <Tab label="Open Bets" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography style={{ marginTop: 30 }}>
          Click on the odds to add selections to the betslip.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={state.checkedA}
              onChange={handleChangeValue}
              name="checkedA"
            />
          }
          label="Show bet Info"
        />
        <div className={classes.root}>
          <Accordion>
            <Paper className={classes.headingStyle}>
              <AccordionSummary
                expandIcon={<ExpandMore style={{ color: "#ffffff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Unmatched Bets
                </Typography>
              </AccordionSummary>
            </Paper>
            <AccordionDetails>
              <Typography>You have no unmatch bets.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <Paper className={classes.headingStyle}>
              <AccordionSummary
                expandIcon={<ExpandMore style={{ color: "#ffffff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Matched Bets
                </Typography>
              </AccordionSummary>
            </Paper>
            <AccordionDetails>
              <Typography>You have no matched bets.</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </TabPanel>
    </div>
  );
}
