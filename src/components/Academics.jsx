import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List } from "@mui/material";
import React from "react";
import { LocationOn } from "@mui/icons-material";
import { ACADEMICS_DATA } from "../Utils/otherDetails";

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

  const handleExpandClick = (index) => {
    setExpanded(!expanded);
  };
  return (
    <>
      <List sx={{ width: "100%", maxWidth: '100%', bgcolor: "transparent", display:'flex', flexDirection:'column', gap:'10px' }}>
        {ACADEMICS_DATA.map((data, index) => (
          <Card key={index} sx={{ width: "100%", backgroundColor:'#a79248', borderRadius:'20px' }}>
            <CardHeader
              title={data.name}
              subheader={data.startDate + "-" + data.EndDate}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {data.course}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <LocationOn />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>
                  {data.detailsOne}
                </Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  {data.detailsTwo}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </List>
    </>
  );
}

export default Academics;
