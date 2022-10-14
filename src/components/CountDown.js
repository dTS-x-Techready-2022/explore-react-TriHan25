import React from "react";
import iauction from "iauction";

export const CountDown = () => {
  const iauction = require("iauction");
  iauction({
    countdownInMin: 1,
    startDate: "2022/04/26 17:30:00",
    endDate: "2022/04/26 17:30:00",
    callback: (time) => console.log(time),
  });
  return <div></div>;
};
