import React from "react";
import "../resources/css/home.css";
import { Avatar, Typography } from "@mui/material";
import { userProfileDefaultData } from "../Utils/Constants";
import dpImage from "../resources/images/dpImage.jpeg";
function Home() {
  const userName = userProfileDefaultData.Name;
  return (
    <div className="mainContainer">
      <Avatar
        src={dpImage}
        sx={{ width: "100px", height: "100px", display: "flex", mt: "50px", mb:'30px' }}
      />
      <Typography variant="h5" >I'm</Typography>
      <Typography variant="h1" sx={{ color: "#465776"}}>
        {userName},
      </Typography>
      <Typography variant="h5" sx={{textAlign:'center', m:'50px', mt:'px'}}>
        A driven Computer Science student with a passion for exploring the
        cutting edge of Data Science and Machine Learning. I thrive on turning
        data into insights and innovation. Beyond the code, I'm a spiritual
        explorer, constantly seeking balance and deeper understanding in life.
        My love for travel and cultural immersion fuels my curiosity about the
        world, inspiring me to embrace diversity and learn from every corner of
        the globe.
      </Typography>

      {/* </Avatar> */}
    </div>
  );
}

export default Home;
