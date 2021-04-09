import { Container, Grid, Paper } from "@material-ui/core";
import Head from "next/head";
import InPlay from "../Components/inPlay";
import MostPopular from "../Components/mostPopular";
import Header from "../Layouts/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
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
      </Header>
    </div>
  );
}
