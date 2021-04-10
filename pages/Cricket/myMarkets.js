import React from "react";
import MyMarket from "../../Components/cricket/myMarket";
import Header from "../../Layouts/header";

function MyMarkets(props) {
  return (
    <div>
      <Header>
        <MyMarket />
      </Header>
    </div>
  );
}

export default MyMarkets;
