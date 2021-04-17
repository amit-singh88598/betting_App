import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, Divider, Paper, Switch } from "@material-ui/core";
import BetSlip from "../Components/Desktop/Cricket/betSlip";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  // heading: {
  //   fontSize: "0.8em",
  // },
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

export default function RightSideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Accordion>
        <Paper className={classes.headingStyle}>
          <AccordionSummary
            expandIcon={<ExpandMore style={{ color: "#ffffff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Unmatched Bets</Typography>
          </AccordionSummary>
        </Paper>
        <AccordionDetails>
          <Typography>You have no unmatch bets.</Typography>
        </AccordionDetails>
      </Accordion>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        color="primary"
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <div style={{ display: "flex" }}>
        <Typography>Betslip</Typography>
        <Button
          style={{ marginLeft: "auto" }}
          color="primary"
          variant="contained"
          size="small"
        >
          Edit Stakes
        </Button>
      </div>
      <Divider style={{ marginBottom: 10, height: 2 }} />
      <BetSlip />
    </div>
  );
}
