import {
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import "../resources/css/socialprofiles.css";
import Typewriter from "typewriter-effect";
import React from "react";
import { Typography } from "@mui/material";

function SocialProfiles() {
  return (
    <div className="socialContainer">
      <Typography variant="h2" sx={{ml:'6rem', mt:'6rem'}}>
        CONNECT WITH ME IN...
        <Typography variant="h1" sx={{color:'#a79248', fontFamily:'Source Code Pro', fontWeight:'400', }}>
          <Typewriter
            options={{
              strings: ["LINKEDIN", "GITHUB", "FACEBOOK", "INSTAGRAM"],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
      </Typography>
      <div className="socialMediaIcons">
        <LinkedinFilled className="mediaIcon" />
        <GithubFilled className="mediaIcon" />
        <FacebookFilled className="mediaIcon" />
        <InstagramFilled className="mediaIcon" />
      </div>
    </div>
  );
}

export default SocialProfiles;
