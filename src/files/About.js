import React from 'react';
import web from "../img/lol2.svg"
import Common from "../component/Common"
import {NavLink} from "react-router-dom";

const About = () => {
  return (<>
  <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Here"/>
  </>);
};

export default About;