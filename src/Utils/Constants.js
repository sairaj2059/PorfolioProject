import defaultImage from "../resources/images/defaultImage.jpg"
import { CodeRounded, ContactPageRounded, DraftsRounded, HomeRounded, SchoolRounded } from "@mui/icons-material";

export const userProfileDefaultData={
    "Name"      :"Raj Guragain",
    "UserName"  :"raj_guragain",
    "DOB"       :"01-03-2003",
    "Address"   :" Bangalore",
    "EmailID"   :"raj@gmail.com",
    "PhoneNo"   :"987665432",
    "Description":"Sairam",
    "Photo"     : defaultImage
}

export const IconTileMap={
    "Home": <HomeRounded className="icon"/>,
    "Academics": <SchoolRounded className="icon"/>,
    "Projects": <CodeRounded className="icon"/>,
    "Social Profiles": <DraftsRounded className="icon"/>,
    "Resume": <ContactPageRounded className="icon"/>
}

export const DEFAULT_SIDE_MENU=[
    {
        "title": "Home",
        "icon":  IconTileMap.Home
    },
    {
        "title": "Academics",
        "icon": IconTileMap.Academics
    },
    {
        "title": "Projects",
        "icon": IconTileMap.Projects
    },
    {
        "title": "Social Profiles",
        "icon": IconTileMap["Social Profiles"]
    },
    {
        "title": "Resume",
        "icon": IconTileMap.Resume
    }
]


export const DEFAULT_DRAWER_FLAG= true;
export const DEFAULT_ACTIVE_PAGE= DEFAULT_SIDE_MENU[0].title
