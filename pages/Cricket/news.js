import React from "react";
import CricketNews from "../../Components/cricket/cricketNews";
import MobHeader from "../../Layouts/mobHeader";

function News(props) {
  return (
    <div>
      <MobHeader>
        <CricketNews />
      </MobHeader>
    </div>
  );
}

export default News;
