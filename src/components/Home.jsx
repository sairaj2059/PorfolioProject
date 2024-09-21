import React from "react";
import "../resources/css/home.css";
import { Avatar, Button, Typography } from "@mui/material";
import { SOCIAL_MEDIA_ICONS, userProfileDefaultData } from "../Utils/Constants";
import Typewriter from "typewriter-effect";

function Home() {
  const userName = userProfileDefaultData.Name;
  const dpImage = userProfileDefaultData.Photo;
  return (
    <div className="mainContainer">
      <div className="details">
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Source Code Pro",
            WebkitTextStroke: "0.25px black",
            color:'#544600'
          }}
        >
          HEY👋
          <Typography
            variant="h1"
            sx={{
              color: "#a79248",
              fontFamily: "Source Code Pro",
              fontSize: "4.5rem",
              fontWeight: "400",
              flex: "1 1 45%",

              // WebkitTextStroke:'0.25px white'
            }}
          >
            I'M {userName.toUpperCase()}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Source Code Pro",
              WebkitTextStroke: "0.25px black",
              fontSize: "4.25rem",
              fontWeight: "400",
              display: "flex",
            }}
          >
            I'M A&nbsp;
            <Typewriter
              options={{
                strings: "STUDENT",
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Typography>
        <div className="icons">
          <Button
            variant="contained"
            sx={{ borderRadius: "50px", backgroundColor: "#a79248" }}
          >
            Get in touch{"->"}
          </Button>
          {SOCIAL_MEDIA_ICONS.map((data, index) => (
            <Avatar
              sx={{
                color: "black",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              {data.icon}
            </Avatar>
          ))}
        </div>
      </div>
      <Avatar
        src={dpImage}
        sx={{
          width: "400px",
          height: "500px",
          border: "5px solid #a79248",
          borderRadius: "20%",
          mr: "7vw",
        }}
        variant="square"
      />
    </div>
  );
}

export default Home;
