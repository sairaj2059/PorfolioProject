import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, List } from "@mui/material";
import React from "react";
import { LocationOn } from "@mui/icons-material";
import { ACADEMICS_DATA } from "../Utils/otherDetails";
import "../resources/css/academics.css";
import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

function Academics() {
  const [expanded, setExpanded] = React.useState(false);
  const [activeCard, setActiveCard] = React.useState(null);

  const handleExpandClick = (index) => (event, newExpanded) => {
    setActiveCard(index);
    setExpanded(!expanded);
  };
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "transparent",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {ACADEMICS_DATA.map((data, index) => (
          <Card
            className="container"
            sx={{
              width: "100%",
              background: "transparent",
              borderRadius: "10px",
              border:'1px solid #a79248'
            }}
            key={index}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ background: "transparent", color: "black" }}>
                  <SchoolIcon />
                </Avatar>
              }
              sx={{ color: "black",  }}
              title={<Typography sx={{fontSize:'20px', fontWeight:800}}>
                {data.name}
              </Typography>}
              
              subheader={data.startDate + " - " + data.EndDate}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {data.course}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{background:'white'}}>
              <Link to={data.location} style={{textDecoration:'none', color:'black'}} >
                <IconButton
                  aria-label="location"
                  sx={{ color: "black", ml: "7px" }}
                >
                  <LocationOn />
                </IconButton>
                <Typography sx={{textDecoration:'none', display:'inline'}}>
                  {data.address}
                </Typography>
              </Link>
              <ExpandMore
                expand={activeCard === index ? expanded : false}
                onClick={handleExpandClick(index)}
                aria-expanded={activeCard === index ? expanded : false}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={activeCard === index ? expanded : false}
              timeout="auto"
              unmountOnExit
            >
              <CardContent sx={{background:'white', color:'gray'}}>
                {data.details.map((detail, ind) => (
                  <Typography key={ind} sx={{ marginBottom: 2, color:'gray' }}>
                    {detail.detail}
                  </Typography>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </List>
    </>
  );
}

export default Academics;

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function ControlledAccordions() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div>
//       {ACADEMICS_DATA.map((data, index) => (
//       <Accordion expanded={expanded === index} onChange={handleChange(index)}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <Typography sx={{ width: '33%', flexShrink: 0 }}>
//             General settings
//           </Typography>
//           <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
//             Aliquam eget maximus est, id dignissim quam.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
// ))}
//     </div>
//   );
// }
