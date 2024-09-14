import "./App.css";
import Profile from "./components/Profile/Profile";
import Home from "./components/homePage/Home";
import Academics from "./components/academicsPage/Academics";
import Projects from "./components/Projects/Projects";
import ContactUs from "./components/Contact Us/ContactUs";
import Resume from "./components/Resume/Resume";
import SocialProfiles from "./components/Social Profiles/SocialProfiles";
function App() {
  return (
    <>
      <Home />
      <Academics />
      <ContactUs />
      <Profile />
      <Resume />
      <SocialProfiles />
      <Projects/>
    </>
  );
}

export default App;
