import React from "react";
import Intro from "Components/Intro/Intro";

import Banner from "Components/Banner/Banner";

export default React.memo(() => {
  console.log("home");
  return (
    <>
      <Intro />
      <Banner />
    </>
  );
});
