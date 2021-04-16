import { Typography } from "@material-ui/core";
import React from "react";

function DesktopFooter(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000000",
        padding: 30,
        color: "#ffffff",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography>Rules & Regulations © 2018-2020</Typography>
    </div>
  );
}

export default DesktopFooter;
