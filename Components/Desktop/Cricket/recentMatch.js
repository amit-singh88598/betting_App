import { Card, Divider, Grid, Link, Typography } from "@material-ui/core";
import { StarOutline } from "@material-ui/icons";
import React from "react";

const Team = [
  {
    name: "Rajasthan Royals v Delhi Capitals",
    date: "10-05-2021",
    time: "12:40",
    no1: 1.0,
    no2: 2.0,
    no3: 3.0,
    no4: 4.0,
  },
  {
    name: "Mumbai Indians v Kings X1 Punjab",
    date: "10-05-2021",
    time: "12:40",
    no1: 1.0,
    no2: 2.0,
    no3: 3.0,
    no4: 4.0,
  },
  {
    name: "SRH v Pune Warriers",
    date: "10-05-2021",
    time: "12:40",
    no1: 1.0,
    no2: 2.0,
    no3: 3.0,
    no4: 4.0,
  },
  {
    name: "Rajasthan Royals v KKR",
    date: "10-05-2021",
    time: "12:40",
    no1: 1.0,
    no2: 2.0,
    no3: 3.0,
    no4: 4.0,
  },
];

function RecentMatch(props) {
  return (
    <div style={{ padding: 20 }}>
      <Typography style={{ fontSize: "1.6em" }}>Cricket</Typography>
      <Divider />
      <div
        style={{
          marginTop: 10,
          display: "flex",
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
            fontSize: "0.9em",
            marginLeft: 5,
          }}
        >
          Match
        </Typography>
        <div
          style={{
            marginLeft: "auto",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography
              style={{ marginRight: 80, fontWeight: 600, fontSize: "0.9em" }}
            >
              1
            </Typography>
            <Typography
              style={{ marginRight: 75, fontWeight: 600, fontSize: "0.9em" }}
            >
              X
            </Typography>
            <Typography
              style={{ marginRight: 45, fontWeight: 600, fontSize: "0.9em" }}
            >
              2
            </Typography>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        {Team.map((item, index) => (
          <Card key={index} style={{ display: "flex" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={7}>
                <StarOutline style={{ paddingTop: 5 }} />
                <Link
                  style={{
                    marginLeft: 10,
                    color: "#054eed",
                    fontWeight: 500,
                    fontSize: "0.9em",
                    paddingTop: 5,
                    paddingBottom: 5,
                    cursor: "pointer",
                  }}
                >
                  {item.name}
                </Link>
                <div
                  style={{
                    display: "flex",
                    float: "right",
                    marginLeft: "auto",
                  }}
                >
                  <Typography
                    style={{ marginLeft: 10, fontSize: "0.7em", marginTop: 5 }}
                  >
                    {item.date}
                  </Typography>
                  <Typography
                    style={{ marginLeft: 5, fontSize: "0.7em", marginTop: 5 }}
                  >
                    {item.time}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={5}>
                <div style={{ display: "flex", marginLeft: "auto" }}>
                  <Card
                    elevation={0}
                    style={{
                      height: 32,
                      cursor: "pointer",
                      width: 60,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#86e4f7",
                    }}
                  >
                    {item.no1}
                  </Card>
                  <Card
                    elevation={0}
                    style={{
                      height: 32,
                      cursor: "pointer",
                      width: 60,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fa98ae",
                    }}
                  >
                    {item.no2}
                  </Card>
                  <Card
                    elevation={0}
                    style={{
                      height: 32,
                      cursor: "pointer",
                      width: 60,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#86e4f7",
                    }}
                  >
                    -
                  </Card>
                  <Card
                    elevation={0}
                    style={{
                      height: 32,
                      cursor: "pointer",
                      width: 60,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fa98ae",
                    }}
                  >
                    -
                  </Card>
                  <Card
                    elevation={0}
                    style={{
                      height: 32,
                      cursor: "pointer",
                      width: 60,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#86e4f7",
                    }}
                  >
                    {item.no3}
                  </Card>
                  <Card
                    elevation={0}
                    style={{
                      height: 32,
                      cursor: "pointer",
                      width: 60,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fa98ae",
                    }}
                  >
                    {item.no4}
                  </Card>
                </div>
              </Grid>
            </Grid>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default RecentMatch;
