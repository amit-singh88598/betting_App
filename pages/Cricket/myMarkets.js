import React from "react";
import MyMarket from "../../Components/cricket/myMarket";
import MobHeader from "../../Layouts/mobHeader";

function MyMarkets(props) {
  return (
    <div>
      <MobHeader>
        <MyMarket />
      </MobHeader>
    </div>
  );
}

export default MyMarkets;
