import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  Typography,
} from "@mui/material";
import { PROJECTS_DETAILS } from "../Utils/otherDetails";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';



import "../resources/css/projects.css";
import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <List
        sx={{
          width: "100%",
          bgcolor: "transparent",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {PROJECTS_DETAILS.map((data, index) => (
          <Card sx={{ maxWidth: 345, bgcolor:'#a79248', borderRadius:'20px' }}>
            <CardMedia>
              <PictureAsPdfIcon/>
            </CardMedia>
          {/* <CardMedia
            sx={{ height: 140,  }}
            image={<PictureAsPdfIcon/>}
            title="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {data.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={data.gitLink}>
            <GitHub/>
            </Link>
            

          </CardActions>
        </Card>
        ))}
      </List>
    </>
  );
}

export default Projects;
