import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  heading: {
    fontSize: "0.8em",
  },
}));

export default function RightSideBar() {
  const classes = useStyles();

  return (
    <div>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Available Credit :
          </Typography>
          <Typography className={classes.heading}>81.60</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Available Credit :</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
