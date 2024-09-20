import {
  Avatar,
  ButtonBase,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { PROJECTS_DETAILS } from "../Utils/projectDetails";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import '../resources/css/projects.css'

function Projects() {
  return (
    <>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection:'column',
          flexWrap: "wrap",
          gap: '15px'
        }}
      >
        {PROJECTS_DETAILS.map((data, index) => (
          <div className="listItem">
            <ListItem
              // alignItems="flex-start"
              sx={{
                width: "100%",
                height: "150px",
                cursor: "pointer",
                overflow:'clip'
              }}
              
            >
              <DescriptionIcon sx={{ width: 128, height: 128 }} />
              <ListItemText
                primary={data.name}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      {data.date}
                    </Typography>
                    <br />
                    {data.description}
                    
                  </>
                }
              />
            </ListItem>
          </div>
          
        ))}
      </List>
    </>
  );
}

export default Projects;
