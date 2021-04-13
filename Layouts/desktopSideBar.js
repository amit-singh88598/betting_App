// import React from "react";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Settings,
//   SportsBaseball,
//   SportsSoccer,
//   SportsVolleyball,
//   Stars,
// } from "@material-ui/icons";
// import { Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function DesktopSideBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <ButtonGroup
//         orientation="vertical"
//         color="primary"
//         aria-label="vertical contained primary button group"
//         variant="text"
//       >
//         <Button style={{ padding: 10 }}>
//           <Stars />
//           <Typography style={{ marginLeft: "auto" }}>Favourites</Typography>
//         </Button>
//         <Button style={{ padding: 10 }}>
//           <SportsBaseball />
//           <Typography style={{ marginLeft: "auto" }}>Cricket</Typography>
//         </Button>
//         <Button style={{ padding: 10 }}>
//           <SportsSoccer />
//           <Typography style={{ marginLeft: "auto" }}>Soccer</Typography>
//         </Button>
//         <Button style={{ padding: 10 }}>
//           <SportsVolleyball />
//           <Typography style={{ marginLeft: "auto" }}>Tennis</Typography>
//         </Button>
//       </ButtonGroup>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  SportsBaseball,
  SportsSoccer,
  SportsVolleyball,
  Star,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 260,
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function DesktopSideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="Favourites" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SportsBaseball />
        </ListItemIcon>
        <ListItemText primary="Cricket" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SportsSoccer />
        </ListItemIcon>
        <ListItemText primary="Soccer" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SportsVolleyball />
        </ListItemIcon>
        <ListItemText primary="Tennis" />
      </ListItem>
    </List>
  );
}
