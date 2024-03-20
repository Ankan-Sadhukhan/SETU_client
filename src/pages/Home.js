import React from "react";
import Header from "./Header";
import Body from "./Body";
import Body_content from "./Body_content";
import ScheduleComponent from "./ScheduleComponent";
import Carausal from "./Carausal";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Body />
      <Body_content />
      <ScheduleComponent />
      <Carausal />
      <Footer />
    </div>
  );
};

export default Home;
