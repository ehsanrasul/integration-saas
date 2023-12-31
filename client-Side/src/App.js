import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
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
    </Routes>
  );
}
export default App;
