import defaultImage from "../resources/images/defaultImage.jpg";
import {
  CodeRounded,
  CallEndRounded,
  DraftsRounded,
  HomeRounded,
  SchoolRounded,
  ContactEmergencyRounded,
  ThumbUpAlt,
  ContactPageRounded,
} from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from '@mui/icons-material/Call';
export const userProfileDefaultData = {
  Name: "Raj Guragain",
  UserName: "raj_guragain",
  DOB: "01-03-2003",
  Address: " Bangalore",
  EmailID: "raj@gmail.com",
  PhoneNo: "987665432",
  Description: "Sairam",
  Photo: defaultImage,
};

export const IconTileMap = {
  Home: <HomeRounded className="icon" />,
  Academics: <SchoolRounded className="icon" />,
  Projects: <CodeRounded className="icon" />,
  "Social Profiles": <DraftsRounded className="icon" />,
  Resume: <ContactPageRounded className="icon" />,
  "Contact Us": <CallIcon className="icon" />,
  "All Mail": <MailIcon className="icon" />,
  "Trash": <DeleteIcon className="icon" />,
  "Spam": <ErrorIcon className="icon" />,
  "Subscribers": <ThumbUpAlt className="icon"/>,
};

export const DEFAULT_SIDE_MENU = [
  {
    title: "Home",
    icon: IconTileMap.Home,
  },
  {
    title: "Academics",
    icon: IconTileMap.Academics,
  },
  {
    title: "Projects",
    icon: IconTileMap.Projects,
  },
  {
    title: "Social Profiles",
    icon: IconTileMap["Social Profiles"],
  },
  {
    title: "Resume",
    icon: IconTileMap.Resume,
  },
  {
    title: "Contact Us",
    icon: IconTileMap["Contact Us"],
  },
];

export const SECOND_SIDE_MENU = [
  {
    title: "All Mail",
    icon: IconTileMap["All Mail"],
  },
  {
    title: "Spam",
    icon: IconTileMap.Spam,
  },
  {
    title: "Trash",
    icon: IconTileMap.Trash,
  },

  {
    title: "Subscribers",
    icon: IconTileMap.Subscribers,
  }
];

export const DEFAULT_DRAWER_FLAG = true;
export const DEFAULT_ACTIVE_PAGE = DEFAULT_SIDE_MENU[0].title;
