import React from "react";
import CricketNews from "../../Components/cricket/cricketNews";
import Header from "../../Layouts/header";

function News(props) {
  return (
    <div>
      <Header>
        <CricketNews />
      </Header>
    </div>
  );
}

export default News;
