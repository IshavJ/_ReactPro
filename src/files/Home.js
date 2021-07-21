import React from 'react';
import web from "../img/lol1.svg"
import { NavLink } from "react-router-dom";
import Common from "../component/Common"

const Home = () => {
  return (<>
    <Common name="Grow your productivity with" imgsrc={web} visit="/services" btname="Get Started" />
  </>);
};

export default Home;