import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PopUp from "./pages/PopUp";
import Notification1 from "./pages/Notification1";
import MarketPlace from "./pages/MarketPlace";
import SetPrompt from "./pages/SetPrompt";
import SetPrompt1 from "./pages/SetPrompt1";
import General from "./pages/General";
import CustomizeBot from "./pages/CustomizeBot";
import CreateBot from "./pages/CreateBot";
import MarketingData from "./pages/MarketingData";
import Upload from "./pages/Upload";
import Settings from "./pages/Settings";
import Integrations from "./pages/Integrations";
import EditProfile from "./pages/EditProfile";
import APIKeys from "./pages/APIKeys";
import ImportWebsite from "./pages/ImportWebsite";
import Write from "./pages/Write";
import DataBase from "./pages/DataBase";
import MarketPlace1 from "./pages/MarketPlace1";
import Personal from "./pages/Personal";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import LoginOption from "./pages/LoginOption";
import Start from "./components/Start";
import Knowledge from "./pages/Knowledge";
import Community from "./pages/Community"; // Use Community here
import UserDirectory from "./pages/UserDirectory";
import Message from "./pages/Message";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      // case "/":
      //   title = "";
      //   metaDescription = "";
      //   break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/notification":
        title = "";
        metaDescription = "";
        break;
      case "/market-place":
        title = "";
        metaDescription = "";
        break;
      case "/set-prompt":
        title = "";
        metaDescription = "";
        break;
      case "/set-prompt1":
        title = "";
        metaDescription = "";
        break;
      case "/general":
        title = "";
        metaDescription = "";
        break;
      case "/customize-bot":
        title = "";
        metaDescription = "";
        break;
      case "/create-bot":
        title = "";
        metaDescription = "";
        break;
      case "/marketing-data":
        title = "";
        metaDescription = "";
        break;
      case "/upload":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/integrations":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/api-keys":
        title = "";
        metaDescription = "";
        break;
      case "/import-website":
        title = "";
        metaDescription = "";
        break;
      case "/write":
        title = "";
        metaDescription = "";
        break;
      case "/data-base":
        title = "";
        metaDescription = "";
        break;
      case "/market-place1":
        title = "";
        metaDescription = "";
        break;
      case "/personal":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/login-option":
        title = "";
        metaDescription = "";
        break;
      case "/knowledge":
        title = "";
        metaDescription = "";
        break;


      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/user-directory":
        title = "";
        metaDescription = "";
        break;
  
      case "/message":
        title = "";
        metaDescription = "";
        break;
      
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/notification" element={<Notification1 />} />
      <Route path="/market-place" element={<MarketPlace />} />
      <Route path="/set-prompt" element={<SetPrompt />} />
      <Route path="/set-prompt1" element={<SetPrompt1 />} />
      <Route path="/general" element={<General />} />
      <Route path="/customize-bot" element={<CustomizeBot />} />
      <Route path="/create-bot" element={<CreateBot />} />
      <Route path="/marketing-data" element={<MarketingData />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/api-keys" element={<APIKeys />} />
      <Route path="/import-website" element={<ImportWebsite />} />
      <Route path="/write" element={<Write />} />
      <Route path="/data-base" element={<DataBase />} />
      <Route path="/market-place1" element={<MarketPlace1 />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-option" element={<LoginOption />} />
      <Route path="/knowledge" element={<Knowledge />} />
      <Route path="/community" element={<Community />} /> 
      <Route path="/user-directory" element={<UserDirectory />}/>
      <Route path="/message" element={<Message/>}/>
      {/* <Route path="/start" element={<Start />} /> */}
    </Routes>
  );
}
export default App;
